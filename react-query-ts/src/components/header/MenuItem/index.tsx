import { ReactElement } from "react";
import { setCurrentPage, Pages, currentPageSelector } from "state/router";
import { useAppDispatch, useAppSelector } from "state/hooks";

interface MenuItemProps {
  page: Pages;
}

export function MenuItem(props: MenuItemProps): ReactElement {
  const { page } = props;
  const currentPage = useAppSelector(currentPageSelector);
  const className = currentPage === page ? 'active' : '';

  const dispatch = useAppDispatch();

  function onClickPageButton(page: Pages) {
    dispatch(setCurrentPage(page));
  }

  return (
    <button
      className={className}
      onClick={() => onClickPageButton(page)}
    >
      {page.toUpperCase()}
    </button>
  )
}