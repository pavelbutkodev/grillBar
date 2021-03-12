import React, { FC } from 'react';
import {CodeArea} from "../../component/Shared/CodeArea";
import BasicLayout from "../../component/Shared/GrilArea";

import styles from './styles.module.scss';

const MainWindow: FC = () => {
  const data = {
    "grill": {
      "width": 500,
      "height": 200,
      "grillItems": [{
        "width": 50,
        "height": 30,
        "count": 15,
        "title": "Steak"
      }, {
        "width": 140,
        "height": 140,
        "count": 2,
        "title": "Sausage"
      }, {
        "width": 130,
        "height": 60,
        "count": 4,
        "title": "Tomato"
      }, {
        "width": 20,
        "height": 10,
        "count": 37,
        "title": "Veal"
      }]
    }
  }

  const newGrillItems = data.grill.grillItems.sort(function(a, b) {
    return parseFloat(String(b.width * b.height)) - parseFloat(String(a.width * a.height));
  })

  const heightGrillMaster = data.grill.height
  const widthGrillMaster = data.grill.width

  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <div className={styles.grill_area}>
          <BasicLayout
            height={heightGrillMaster}
            width={widthGrillMaster}
            newGrillItems={newGrillItems}
          />
        </div>
        <div className={styles.code_area}>
          <CodeArea />
        </div>
      </div>
      <div className={styles.right_content}>
        Item out of grill
      </div>
    </div>
  );
}

export default MainWindow;
