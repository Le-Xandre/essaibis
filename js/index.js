
if (navigator.mediaDevices) {
    console.log("getUserMedia supported.");

    const constraints = { audio: true };
    let chunks = [];

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);

        visualize(stream);

        record.onclick = () => {
          mediaRecorder.start();
          console.log(mediaRecorder.state);
          console.log("recorder started");
          record.style.background = "red";
          record.style.color = "black";
        };

        stop.onclick = () => {
          mediaRecorder.stop();
          console.log(mediaRecorder.state);
          console.log("recorder stopped");
          record.style.background = "background-white";
          record.style.color = "red";
        };

        mediaRecorder.onstop = (e) => {
          console.log("data available after MediaRecorder.stop() called.");

          const clipName = prompt("ChromeBook 2020");

          const clipContainer = document.createElement("article");
          const clipLabel = document.createElement("p");
          const audio = document.createElement("audio");
          const deleteButton = document.createElement("button");

          clipContainer.classList.add("clip");
          audio.setAttribute("controls", "");
          deleteButton.textContent = "Delete";
          clipLabel.textContent = clipName;

          clipContainer.appendChild(audio);
          clipContainer.appendChild(clipLabel);
          clipContainer.appendChild(deleteButton);
          soundClips.appendChild(clipContainer);

          audio.controls = true;
          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          chunks = [];
          const audioURL = URL.createObjectURL(blob);
          audio.src = audioURL;
          console.log("recorder stopped");

          deleteButton.onclick = (e) => {
            const evtTgt = e.target;
            evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
          };
        };

        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };
      })
      .catch((err) => {
        console.error(`The following error occurred: ${err}`);
      });
  }



  const song = {meta:{}, data:[

  ]};

  var Generator = { };

  Generator.ambient = function() {
    // push to song.data array //
    if(Generator.sequence === 1 ) {
      song.data.push({ms:Generator.ms, sequence:Generator.sequence, file: 'dragon.wav'})
    }
  };
  Generator.beat = function() {
    // push to song.data array //

    if(Generator.sequence === 4 ) {
      song.data.push({ms:Generator.ms, sequence:Generator.sequence, file: 'Various-05.wav'})
    }else{
      song.data.push({ms:Generator.ms, sequence:Generator.sequence, file: 'funny-12.wav'})
    }


  };
  Generator.foreground = function() {
    // push to song.data array //
    if(Generator.ms<5000) {
      song.data.push({ms:Generator.ms, sequence:Generator.sequence, file: 'saturn-dark-calming-piano-melody_80bpm_G#_minor.wav'})
    }
  };

  Generator.bpm = 120;

  Generator.run = function() {

    Generator.ambient();
    Generator.beat();
    Generator.foreground();

  };

  // Start loop
  Generator.interval = (1000*60) / Generator.bpm;
  Generator.ms = 0;
  Generator.sequences = 8;
  Generator.sequence = 0;


  while(Generator.ms<10000){ // 10 second song

    Generator.ms = Generator.ms + Generator.interval;
    Generator.sequence++;
    if(Generator.sequence>Generator.sequences) Generator.sequence = 1;
    Generator.run()

  }


  clearInterval(Generator.id);
  song.meta.bpm = Generator.bpm;
  console.log(JSON.stringify(song, null, '  '))
