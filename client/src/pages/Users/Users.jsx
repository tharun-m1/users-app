import React, { useEffect, useState } from "react";
import styles from "./users.module.css";
import { getData } from "../../api/addUser";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function getUsers() {
      try {
        setLoading(true);
        const response = await getData();
        setData(response.data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        alert("Something went wrong try again...");
        return navigate("/");
      }
    }
    getUsers();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className={styles.container}>
        {loading ? <Loading /> : ""}
        <div className={styles.wrapper}>
          <div className={styles.caption}>Mobile/Email input List</div>
          <div className={styles.dataContainer}>
            {data.map((user, index) => {
              return (
                <div key={index} className={styles.feild}>
                  {user}
                </div>
              );
            })}
            {data.length === 0 ? (
              <h2 style={{ textAlign: "center" }}>No Users</h2>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
