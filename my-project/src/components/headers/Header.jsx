import styles from './Header.module.css';

function Header() {
  return (
    <>
      <div className={styles.topStrip}>
        <div className={styles.container}>
          <div className={styles.flex}>
            <div className={styles.col1}>
              <p className={styles.textSmall}>
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
