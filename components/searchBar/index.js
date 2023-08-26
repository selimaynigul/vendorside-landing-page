"use client";
import styled from "styled-components";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    props.onSearch(searchTerm);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (searchTerm === "") {
      handleSearch();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchTerm !== "") {
      handleSearch();
    }
  };

  return (
    <Container id="searchBar" isFixed={props.isFixed}>
      <InputContainer>
        <Input
          type="search"
          placeholder="İhale adı, yeri veya kayıt numarası ara..."
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <SearchButton onClick={handleSearch} disabled={searchTerm === ""}>
          <PiMagnifyingGlass />
        </SearchButton>
      </InputContainer>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  height: 90px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #f4f6f9;
  border-bottom: ${(props) => (props.isFixed ? "2px solid white" : "none")};
  box-shadow: ${(props) =>
    props.isFixed ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;

  input[type="search"]::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  input[type="search"]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  /* clears the ‘X’ from Chrome */
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 500px;
  height: 50px;
  padding-left: 20px;
  color: #525e75ff;
  caret-color: #525e75ff;
  border-radius: 10px;
  border: none;
  outline: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  transition: 0.3s;

  &::placeholder {
    color: #a9afbaff;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    &::placeholder {
      font-size: 14px;
      color: white;
    }
  }
`;

/* const Wrapper = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`; */

const SearchButton = styled.button`
  position: absolute;
  height: 35px;
  width: 35px;
  border-radius: 8px;
  right: 10px;
  transform: translateY(-42px);
  color: white;
  background-color: #36a693ff;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  /* Disable button when searchTerm is empty */
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? "0" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: #71c1b3ff;
  }

  &:active {
    height: 33px;
    width: 33px;
    transform: translateY(-41px);
  }
`;

const InputContainer = styled.div`
  margin: 0 10px;
  width: 100%;
  max-width: 500px;
  position: relative;
`;
