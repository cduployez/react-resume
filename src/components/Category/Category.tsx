import React, { useState } from 'react';
import Loader from '../Loader/Loader';
import CategoryTitle from '../CategoryTitle/CategoryTitle';
import { UseStateType } from '../../types/use-state-type';
import classNames from 'classnames';
import styles from './Category.module.scss';

type CategoryProps = {
  categoryTitle: string;
  loading: boolean;
  contentElement: React.JSX.Element;
};

function Category(props: CategoryProps): React.JSX.Element {
  const [categoryDisplayed, setCategoryDisplayed]: UseStateType<boolean> =
    useState(true);

  /**
   * Open/Close category
   */
  function toggle(): void {
    if (categoryDisplayed) {
      close();
    } else {
      open();
    }
  }

  function open(): void {
    setCategoryDisplayed(true);
  }

  function close(): void {
    setCategoryDisplayed(false);
  }

  function contentElement() {
    if (!props.loading) {
      return props.contentElement;
    }
    return null;
  }

  if (props.loading) {
    return <Loader />;
  }

  return (
    <>
      <CategoryTitle
        categoryTitle={props.categoryTitle}
        categoryDisplayed={categoryDisplayed}
        onCategoryDisplayClick={toggle}
      />
      <div
        className={classNames({
          [styles.open]: categoryDisplayed,
          [styles.closed]: !categoryDisplayed
        })}>
        {contentElement()}
      </div>
    </>
  );
}

export default Category;
