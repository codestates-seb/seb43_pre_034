package com.codestates.stackoverflow.security.auth.config;

import com.codestates.stackoverflow.security.auth.filter.JwtAuthenticationFilter;
import com.codestates.stackoverflow.security.auth.filter.JwtVerificationFilter;
import com.codestates.stackoverflow.security.auth.handler.MemberAccessDeniedHandler;
import com.codestates.stackoverflow.security.auth.handler.MemberAuthenticationEntryPoint;
import com.codestates.stackoverflow.security.auth.handler.MemberAuthenticationFailureHandler;
import com.codestates.stackoverflow.security.auth.handler.MemberAuthenticationSuccessHandler;
import com.codestates.stackoverflow.security.auth.jwt.JwtTokenizer;
import com.codestates.stackoverflow.security.auth.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity(debug = true)
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        .antMatchers(HttpMethod.POST, "/users/login/**", "/users/signup/**").permitAll() // 로그인 및 회원 가입 모두 접근 가능
                        .antMatchers(HttpMethod.GET, "/users/{user-id}/**").hasRole("USER") // 회원 조회 유저 접근 가능
                        .antMatchers(HttpMethod.GET, "/users/**").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/users/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/users/{user-id}/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/questions/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/questions/{questions-id}/**", "/questions/{user-id}/**").permitAll()
                        .antMatchers(HttpMethod.GET, "/questions/**").permitAll()
                        .antMatchers(HttpMethod.PATCH, "/questions/{questions-id}/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/questions/{question-id}/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/answers/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/answers/{answers-id}/**", "/questions/{user-id}/{answer-id}/**", "/answer/questions/**").permitAll()
                        .antMatchers(HttpMethod.PATCH, "/answers/{answers-id}/**").hasAnyRole("USER", "ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/answers/{answers-id}/**").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/answers/{user-id}/{answer-id}/**").hasRole("USER")
                        .anyRequest().permitAll());
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("*"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setExposedHeaders(Arrays.asList("*"));
        configuration.addAllowedHeader("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    private class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {

        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/users/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);


            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
