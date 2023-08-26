"use client";
import TenderItem from "@/components/tenderItem";
import SearchBar from "@/components/searchBar";
import Pagination from "@/components/pagination";
import TendersContainer from "@/components/tendersContainer";
import { useState, useEffect } from "react";
import { data } from "../../data/tendersData";
import dynamic from "next/dynamic";

const Tenders = () => {
  const newData = data.map((item) => {
    return { ...item, open: false };
  });

  const [hasMatchingItems, setHasMatchingItems] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [mappedData, setMappedData] = useState(newData);

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const toggleOpen = (item) => {
    setMappedData((prevData) =>
      prevData.map((prevItem) => ({
        ...prevItem,
        open: prevItem.id === item.id ? true : false,
      }))
    );
    console.log(mappedData);
  };

  const toggleClose = (item) => {
    setMappedData((prevData) =>
      prevData.map((prevItem) => ({
        ...prevItem,
        open: prevItem.id === item.id ? !prevItem.open : prevItem.open,
      }))
    );
  };

  const getTenderItemElements = (arr) => {
    return arr
      .slice(indexOfFirstItem, indexOfLastItem)
      .map((item, index) => (
        <TenderItem
          data={item}
          key={`${index + 1}`}
          id={`${item.id}`}
          toggleOpen={() => toggleOpen(item)}
          toggleClose={() => toggleClose(item)}
        />
      ));
  };

  const filterTenderItems = (searchTerm) => {
    const filteredItems = newData.filter(
      (item) =>
        item.header.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.no.includes(searchTerm)
    );
    setMappedData(filteredItems);
    setHasMatchingItems(filteredItems.length > 0);
    setCurrentPage(1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const tenderItems = getTenderItemElements(mappedData);
  const totalTenderItems = mappedData.length;
  const totalPages = Math.ceil(totalTenderItems / itemsPerPage);

  const handleMoveToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // fix the searchbar at the top on scroll
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SearchBar isFixed={isFixed} onSearch={filterTenderItems} />
      <TendersContainer>{tenderItems}</TendersContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleMoveToPage={handleMoveToPage}
        hasMatchingItems={hasMatchingItems}
      />
    </>
  );
};

// hydration error is solved with import next/dynamic
// use this instead of "export default Tenders"
export default dynamic(() => Promise.resolve(Tenders), { ssr: false });
