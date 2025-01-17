import style from './Header.module.css';

function Header() {
  return (
    <>
      <div className={`${style.container} ${style.bg_color}`}>
        <div className={style.container}>
          <div className={style.flex}>
            <div className={style.col1}>
              <p className={style.textSmall}>
                Get up to 50% off new season style, limited time only
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
