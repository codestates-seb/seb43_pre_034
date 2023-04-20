import styled from "styled-components";

// styled componet
const EditSummaryCompo = styled.div`
  padding: 10px 15px 15px 0px;
  width: 100%;
  .edit-summary {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .input-summary {
    width: 100%;
    padding: 7px;
    border: 1px solid #babfc4;
    border-radius: 3px;
    color: #0c0d0e;
    :focus {
      outline: none;
      border: 1px solid #0063af8f;
      box-shadow: 2px 2px 2px #0164b025, -2px -2px 2px #0164b025;
    }
  }
`;

// edit-summary
const EditSummary = () => {
  return (
    <EditSummaryCompo>
      <h4 className="edit-summary">Edit Summary</h4>
      <input
        className="input-summary"
        type="text"
        placeholder="briefly explain your changes (corrected spelling, fixed grammar, improved formatting)"
      />
    </EditSummaryCompo>
  );
};

export default EditSummary;
