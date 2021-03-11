import React, { FC } from 'react';
import styles from './styles.module.scss';
import {CodeArea} from "../../component/Shared/CodeArea";
import BasicLayout from "../../component/Shared/GrilArea";

const MainWindow: FC = () => {
  // const data = {
  //   "grill": {
  //     "width": 400,
  //     "height": 200,
  //     "grillItems": [{
  //       "width": 50,
  //       "height": 30,
  //       "count": 15,
  //       "title": "Steak"
  //     }, {
  //       "width": 140,
  //       "height": 140,
  //       "count": 2,
  //       "title": "Sausage"
  //     }, {
  //       "width": 130,
  //       "height": 60,
  //       "count": 4,
  //       "title": "Tomato"
  //     }, {
  //       "width": 20,
  //       "height": 10,
  //       "count": 37,
  //       "title": "Veal"
  //     }]
  //   }
  // }
  // const [grill, setGrill] = useState({})
  // const createGrill = (item: any) => {
  //   setGrill({...item})
  // }
  //
  // const grillRow = () => {
  //
  // }
  //
  // const grillMaster = () => {
  //   createGrill(data)
  //
  // }
  //
  // useEffect(()=>{grillMaster()},[])

  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <div className={styles.grill_area}>
          <BasicLayout />
        </div>
        <div className={styles.code_area}>
          <CodeArea />
        </div>
      </div>
      <div className={styles.right_content}>
        333
      </div>
    </div>
  );
}

export default MainWindow;
