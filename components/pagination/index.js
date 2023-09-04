import styled from "styled-components";

const Pagination = ({
  currentPage,
  totalPages,
  handleMoveToPage,
  hasMatchingItems,
}) => {
  // Create an array of options for the select element
  const selectOptions = Array.from({ length: totalPages }, (_, index) => ({
    value: index + 1,
    label: `${index + 1}. Sayfa`,
  }));

  return hasMatchingItems ? (
    <PaginationContainer>
      <Button onClick={() => handleMoveToPage(1)} disabled={currentPage === 1}>
        ilk
      </Button>
      <Button
        onClick={() => handleMoveToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {`<`}
      </Button>
      <Select
        value={currentPage}
        onChange={(e) => handleMoveToPage(parseInt(e.target.value))}
      >
        {selectOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Button
        onClick={() => handleMoveToPage(currentPage + 1)}
        disabled={!hasMatchingItems || currentPage === totalPages}
      >
        {`>`}
      </Button>
      <Button
        onClick={() => handleMoveToPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        son
      </Button>
    </PaginationContainer>
  ) : (
    <p
      style={{
        width: "fit-content",
        margin: "20px auto",
        color: "gray",
      }}
    >
      Sonuç Bulunamadı
    </p>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 0 auto 20px auto;
  width: 95%;
  max-width: 300px;
  margin: 20px auto;
`;

const Button = styled.button`
  padding: 5px 0;
  background-color: #36a693ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  width: 100%;
  height: 30px;

  &:hover {
    background-color: #71c1b3ff;
  }

  &:disabled {
    background-color: #a9afbaff;
    cursor: auto;
  }
`;

const Select = styled.select`
  appearance: none;
  padding: 5px 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #525e75ff;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`;
