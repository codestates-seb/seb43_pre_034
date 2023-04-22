import styled from "styled-components";
import { useState } from "react";

const ModalContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
  opacity: 1;
  background-color: hsla(358, 67%, 6%, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CancalBtn = styled.button`
  background: none;
  border-radius: 3px;
  color: #c22e32;
  width: 110px;
  height: 37px;
  padding: 10.4px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;

  &:hover {
    background: #fdf2f2;
  }
  &:active {
    background: hsl(358, 76%, 90%);
    padding: 0 10.4px;
    border: 3px solid hsl(358, 74%, 83%);
  }
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
  transition: opacity 100ms cubic-bezier(0.165, 0.84, 0.44, 1) 10ms,
    z-index 0s 0s, visibility 0s 0s,
    transform 100ms cubic-bezier(0.165, 0.84, 0.44, 1) 10ms,
    transform 100ms cubic-bezier(0.165, 0.84, 0.44, 1) 10ms;
  /* height: 20%; */
  max-width: 600px;
  padding: 1.5rem;
  border-radius: 10px;

  h5 {
    color: #c22e32;
    font-size: 27px;
    margin-bottom: 1rem;
  }
  p {
    color: #3b4045;
    font-size: 13px;
  }
  > div {
    margin-top: 1.5rem;
    display: flex;
    font-size: 13px;
    gap: 0.5rem;
  }
  > div > button {
    border: none;
    padding: 0.8rem;
    border-radius: 5px;
    cursor: pointer;
  }
  .delete_btn {
    background: #d0393e;
    color: #fff;
  }
  .cancal_btn {
    color: #6a737c;
    background: #fff;
  }
`;

const AskDeleteModal = () => {
  const [isModal, setIsModal] = useState(false);

  const modalHandler = () => {
    setIsModal(!isModal);
  };
  const onClickHandler = () => {
    modalHandler();
    location.reload();
    window.scrollTo(0, 0);
  };
  return (
    <ModalContainer>
      <CancalBtn onClick={modalHandler}>Discard draft</CancalBtn>
      {isModal ? (
        <ModalBackdrop onClick={modalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <h5>Discard question</h5>
            <p>
              Are you sure you want to discard this question? This cannot be
              undone.
            </p>
            <div>
              <button className="delete_btn" onClick={onClickHandler}>
                Dicard question
              </button>
              <button className="cancal_btn" onClick={modalHandler}>
                Cancel
              </button>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default AskDeleteModal;
