(this.webpackJsonpuniquify=this.webpackJsonpuniquify||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(16),s=a.n(l),r=(a(22),a(23),a(2)),o=a(3),c=a(5),u=a(4),p=a(6),h=a.n(p),d=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.call(this)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("li",{id:this.props.name,style:{fontWeight:this.props.repeated?500:800,margin:"1%"}},this.props.name)}}]),a}(n.Component),m=(a(24),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).handleButtonClick=function(){var t=new URL("https://uniquify.herokuapp.com/compare/");document.getElementById("loader").style.display="block",t.searchParams.append("song1",e.state.list1),t.searchParams.append("song2",e.state.list2);try{fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),e.comparePlaylist(t.songs1,t.songs2),e.addPlaylistName(t.playlistName1,t.playlistName2),document.getElementById("loader").style.display="none"}))}catch(a){console.log("failed to fetch")}},e.state={list1:"3wgGItoJDDLMDUBCdYBQ2d",list2:"2uwblsTCKkwr4fyTMh2qeI",songs1:[],songs2:[],showRepeated:!0,playlistName1:"",playlistName2:""},e}return Object(o.a)(a,[{key:"addPlaylistName",value:function(e,t){t&&this.setState({playlistName1:e,playlistName2:t})}},{key:"comparePlaylist",value:function(e,t){if(void 0!==e&&void 0!==t){var a=e.map((function(e){var a=!1;return t.includes(e)&&(a=!0),{name:e,repeated:a}})),n=t.map((function(t){var a=!1;return e.includes(t)&&(a=!0),{name:t,repeated:a}}));this.setState({songs1:a,songs2:n})}else alert("Invalid playlist ID, please try again!")}},{key:"hideNonUnique",value:function(){this.setState({showRepeated:!this.state.showRepeated})}},{key:"changeInput1",value:function(e){if(e.target.value.includes("spotify:playlist:")){var t=e.target.value.replace("spotify:playlist:","");this.setState({list1:t})}else if(e.target.value.includes("https://open.spotify.com/playlist/")){t=e.target.value.substr(34,22);this.setState({list1:t})}else this.setState({list1:e.target.value})}},{key:"changeInput2",value:function(e){if(e.target.value.includes("spotify:playlist:")){var t=e.target.value.replace("spotify:playlist:","");this.setState({list2:t})}else if(e.target.value.includes("https://open.spotify.com/playlist/")){t=e.target.value.substr(34,22);this.setState({list2:t})}else this.setState({list2:e.target.value})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:h.a.wrapper,id:h.a.wrapper},i.a.createElement("h3",null,"Welcome to Uniquify!"),i.a.createElement("br",null),i.a.createElement("p",null,'To get started simply put two Spotify playlists IDs which can be located under "share" then click "Copy Spotify URI"'),i.a.createElement("p",null,"Keep in mind both playlist that you want to compare have to be PUBLIC!"),i.a.createElement("input",{type:"text",id:"playList1",onChange:function(t){return e.changeInput1(t)}}),i.a.createElement("input",{type:"text",id:"playList2",onChange:function(t){return e.changeInput2(t)}}),i.a.createElement("br",null),i.a.createElement("button",{onClick:this.handleButtonClick},"Get list"),i.a.createElement("br",null),i.a.createElement("div",{id:"loader"}),i.a.createElement("ol",{id:"list1",title:this.state.playlistName1,onClick:this.hideNonUnique.bind(this)},this.state.songs1.filter((function(t){return e.state.showRepeated||!t.repeated})).map((function(e){return i.a.createElement(d,{name:e.name,repeated:e.repeated,key:e.name+Math.random()})}))),i.a.createElement("ol",{id:"list2",title:this.state.playlistName2,onClick:this.hideNonUnique.bind(this)},this.state.songs2.filter((function(t){return e.state.showRepeated||!t.repeated})).map((function(e){return i.a.createElement(d,{name:e.name,repeated:e.repeated,key:e.name+Math.random()+1.1})}))))}}]),a}(n.Component));var y=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.d54010a7.chunk.js.map