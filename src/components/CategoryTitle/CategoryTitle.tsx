import React from 'react';
import { IconsService } from '../../helpers/ui/icons.service';
import styles from './CategoryTitle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconsService: IconsService = new IconsService();

type CategoryTitleProps = {
  categoryTitle: string;
  categoryDisplayed: boolean;
  onCategoryDisplayClick: () => void;
};

function CategoryTitle(props: CategoryTitleProps): React.JSX.Element {
  function expandButtonElement() {
    if (!props.categoryDisplayed) {
      return (
        <FontAwesomeIcon
          icon={iconsService.faPlus}
          className={styles.expandButton}
        />
      );
    }
    return null;
  }

  return (
    <>
      <div className={styles.title} onClick={props.onCategoryDisplayClick}>
        {expandButtonElement()}
        <h3>{props.categoryTitle}</h3>
      </div>
    </>
  );
}

export default CategoryTitle;
