import React from "react";
import styles from "./users.module.css";
function Users() {
  const arr = Array(50).fill(1);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.caption}>Mobile/Email input List</div>
          <div className={styles.dataContainer}>
            {arr.map((el) => {
              return <div className={styles.feild}>Data</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
