import styled from "styled-components";

const GuideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  .right_marginbox {
    flex: 0 1 30%;
  }
  @media screen and (max-width: 1100px) {
    .right_marginbox {
      display: none;
    }
  }
`;

const ContentGuide = styled.div`
  flex: 0 1 70%;
  min-width: 737px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  background: #ebf4fb;
  border: solid 1px #7aa7c7;
  border-radius: 3px;
  color: #3b4045;

  a {
    text-decoration: none;
    color: #0074cc;
  }
  .guide_title {
    padding-bottom: 1rem;
    font-size: 21px;
  }
  .guide {
    font-size: 15px;
    padding-bottom: 0.3rem;
  }
  .step_title {
    font-weight: 600;
    margin: 1rem 0 0.6rem 0;
    font-size: 13px;
  }

  @media screen and (max-width: 1100px) {
    flex: 0 1 1052px;
    min-width: 0;
    width: 100%;
  }
`;

const GuideUl = styled.ul`
  font-size: 13px;
  list-style: disc;
  padding: 0.1rem 2rem 0.1rem 2rem;

  .li_style {
    padding: 0.1rem;
  }
`;

const WriteGuide = () => {
  return (
    <GuideContainer>
      <ContentGuide>
        <p className="guide_title">Writing a good question</p>
        <p className="guide">
          You’re ready to&nbsp;
          <a href="https://stackoverflow.com/help/how-to-ask">ask</a>
          &nbsp;a&nbsp;
          <a href="https://stackoverflow.com/help/on-topic">
            programming-related question and&nbsp;
          </a>
          this form will help guide you through the process.
        </p>
        <p className="guide">
          Looking to ask a non-programming question? See&nbsp;
          <a href="https://stackexchange.com/sites#technology">
            the topics here &nbsp;
          </a>
          to find a relevant site.
        </p>
        <h5 className="step_title">Steps</h5>
        <GuideUl>
          <li className="li_style">
            Summarize your problem in a one-line title.
          </li>
          <li className="li_style">Describe your problem in more detail.</li>
          <li className="li_style">
            Describe what you tried and what you expected to happen.
          </li>
          <li className="li_style">
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li className="li_style">
            Review your question and post it to the site.
          </li>
        </GuideUl>
      </ContentGuide>
      <div className="right_marginbox"></div>
    </GuideContainer>
  );
};

export default WriteGuide;
