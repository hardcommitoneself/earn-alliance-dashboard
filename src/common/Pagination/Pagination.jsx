import React, { useCallback } from "react";
import * as EA from "./styles";

const Pagination = (props) => {
  const { perPage = 12, total = 0, current = 0, paginate } = props;
  const pageNumbers = Array(Math.ceil(total / perPage)).fill(0);

  const handlePrevButtonClick = useCallback(() => {
    if (typeof paginate === "function" && current > 0) paginate(current - 1);
  }, [current, paginate]);

  const handleNextButtonClick = useCallback(() => {
    if (
      typeof paginate === "function" &&
      current < Math.ceil(total / perPage) - 1
    )
      paginate(current + 1);
  }, [current, paginate, perPage, total]);

  const handlePageButtonClick = useCallback(
    (page) => {
      if (typeof paginate === "function") paginate(page);
    },
    [paginate]
  );

  return (
    <EA.Pagination>
      {/* prev */}
      <EA.PaginationArrowButton onClick={handlePrevButtonClick}>
        <EA.PaginationArrowButtonImage
          src="/images/arrow-left.svg"
          alt="arrow-left"
        />
      </EA.PaginationArrowButton>

      {/* page buttons */}
      {pageNumbers.map((_, index) => (
        <EA.PaginationNumberButton
          key={index}
          active={current === index}
          onClick={() => handlePageButtonClick(index)}
        >
          {index + 1}
        </EA.PaginationNumberButton>
      ))}

      {/* next */}
      <EA.PaginationArrowButton onClick={handleNextButtonClick}>
        <EA.PaginationArrowButtonImage
          src="/images/arrow-right.svg"
          alt="arrow-right"
        />
      </EA.PaginationArrowButton>
    </EA.Pagination>
  );
};

export default Pagination;
