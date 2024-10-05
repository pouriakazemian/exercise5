import Styles from "./user.module.css";
const Info = (props) => {
  return (
    <>
      <section className={Styles.box}>
        <p>
          {props.name}
          {props.age}
        </p>
      </section>
      <section>
        {props.admin}
      </section>
    </>
  );
};
export default Info;
