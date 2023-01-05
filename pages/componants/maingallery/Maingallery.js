import Styles from "../../../styles/maingallery.module.css";
import Image from 'next/image';


const Maingallery = () => {
  return (
    <>

    <div className={Styles.images_grid_home}>
      <div className={`${Styles.mian_galler_img} ${Styles.images_grid_home_col_2} `}>
        <Image src="/image/swiss-cottage-min.jpg" width={0} height={0} className={Styles.fist_img} />
      </div>
      <div className={Styles.side_img}>
      <div className={`${Styles.mian_galler_img_side} `}></div>
      <div className={`${Styles.mian_galler_img_side} `}></div>
      </div>
    </div>

    <div className={Styles.line_img}>
      <div className={`${Styles.mian_galler_img_line} `}>
        <Image src="/image/home_dj_4.jpg" width={0} height={0} className={Styles.line_img_line} />
      </div>
      <div className={`${Styles.mian_galler_img_line} `}>
      <Image src="/image/rafting.jpg" width={0} height={0} className={Styles.line_img_line} />
      </div>
      <div className={`${Styles.mian_galler_img_line} `}>
      <Image src="/image/restaurent_oscenox.jpeg" width={0} height={0} className={Styles.line_img_line} />
      </div>
      <div className={`${Styles.mian_galler_img_line} `}>
      <Image src="/image//picture1.jpg" width={0} height={0} className={Styles.line_img_line} />
      </div>
      </div>

    </>
  )
}

export default Maingallery
