import classes from "../css/Box.module.css";
import DownloadFileLogo from "../../../UI/DownloadFileLogo";
import ShowDetailLogo from "../../../UI/ShowDetailLogo";

export default function Box(props) {
  return (
    <main className={classes.main}>
      <section className={classes.upper}>
        <h3 className={classes.title}>{props.title}</h3>
        <button className={classes.btn} onClick={props.downloadPDFHandler}>
          {props.showDetail && <ShowDetailLogo />}
          {props.showDownload && <DownloadFileLogo />}
        </button>
      </section>
      {props.children}
    </main>
  );
}
