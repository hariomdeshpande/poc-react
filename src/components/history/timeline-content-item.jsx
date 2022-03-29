export default function TimeLineContentItem(props) {
  return (
    <div className={`history-timeline-content-item ${props.highlight && props.highlight==true ? 'active' : '' } `  } >
      <div class="row align-items-end">
        <div class="col-lg-5">
          <h2 class="content-head">
            <span>{props.data.contentHeadUpper}</span>
            {props.data.contentHeadLower}
          </h2>
        </div>
        <div class="col-lg-7 ps-4">
          <div class="content-year">{props.data.contentYear}</div>
          <div class="content-text">
          {props.data.contentText}
          </div>
        </div>
      </div>
    </div>
  );
}
