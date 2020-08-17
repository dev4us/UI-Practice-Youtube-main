function getData() {
  $.ajax({
    type: "get",
    dataType: "json",
    url: "https://www.googleapis.com/youtube/v3/search",
    data: {
      key: "key^^",
      type: "video",
      part: "snippet",
      q: "고양이",
      maxResults: 20
    },
    ContentType: "application/json; charset=utf-8",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },

    success: function (data) {
      console.log(data);
    },
    error: function (err) {
      console.log(err);
    }
  });
}

//getData();

function createCard() {
  $.getJSON("./resource/data.json", function (data) {
    console.log(data);
    var items = [];

    $.each(data.items, function (key, val) {
      console.log(val);
      items.push(
        '<article class="card">' +
          "<article>" +
          '<img class="thumbnail" src="' +
          val.snippet.thumbnails.high.url +
          '"/>' +
          "</article>" +
          '<article class="description">' +
          '<div class="uploader-icon-box">' +
          '<img class="uploader-icon" src="https://github.com/dev4us/source_warehouse/blob/master/images/avatar.png?raw=true"/>' +
          "</div>" +
          '<div class="video-description">' +
          '<div class="video-title">' +
          val.snippet.title +
          "</div>" +
          '<div class="video-badge">' +
          val.snippet.channelTitle +
          " · 조회수 100회 · 3일 전</div>" +
          "</div>" +
          "<div>" +
          '<svg viewBox="0 0 24 24" fill="" class="more-icon">' +
          '<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>' +
          "</svg>" +
          "</div>" +
          "</article>" +
          "</article>"
      );
    });

    $("<div/>", {
      class: "card-list",
      html: items.join("")
    }).appendTo(".contents");
  });
}

createCard();
