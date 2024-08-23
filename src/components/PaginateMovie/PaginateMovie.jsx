import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";
import ReactPaginate from "react-paginate";

import styles from "./PaginateMovie.module.css";

const PaginateMovie = ({ total, currentPage, setCurrentPage }) => {

  const onChange = ({ selected }) => {
    setCurrentPage(selected + 1);
    
    setTimeout(() => {
      scroll.scrollToTop({
        duration: 500,
        smooth: "easeInOutQuad",
      });
    })
  };

  return total && (
    <ReactPaginate
      breakLabel="..."
      onPageChange={onChange}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      pageCount={total}
      initialPage={currentPage-1}
      renderOnZeroPageCount={null}
      previousLabel={<MdKeyboardArrowLeft />}
      nextLabel={<MdKeyboardArrowRight />}
      className={styles.pagination}
      previousClassName={styles.prevBtn}
      nextClassName={styles.nextBtn}
      breakLinkClassName={styles.break}
      pageClassName={styles.item}
      activeClassName={styles.active}
    />
  );
};

export default PaginateMovie;
