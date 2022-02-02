export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div style={{ marginLeft: 10}}>
        <div className="text-white">{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  );
}
