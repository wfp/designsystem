import styles from './styles.module.scss';

export default function Video({ id, height }: any) {
  return (
    <div className={styles.videoWrapper}>
      <div
        className={styles.video}
        style={height && { paddingBottom: `${height}%` }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}?showinfo=0&rel=0&color=white`}
          width="560"
          height="315"
          frameBorder="0"></iframe>
      </div>
    </div>
  );
}
