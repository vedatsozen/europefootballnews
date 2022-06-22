import './App.css';
import React from 'react';
import News from './News';
import Footer from './Footer';


function App() {

const titles = ["RIDVAN YILMAZ TO FRANKFURT","JORGE JESUS TO FENERBAHÇE","HAALAND TO MANCHESTER CITY"];

const news = ["Rıdvan to Frankfurt. Frankfurt will pay 6.5 millon dollar to Besiktas","Jorge Jesus is in İstanul","Haaland will play for Manchester City"];

return (

<div className='App'>

<h1>EUROPE FOOTBALL NEWS</h1>

<hr />

<div id='newscontainer'>

<News title={titles[0]} newsdetail={news[0]} />

<News title={titles[1]} newsdetail={news[1]} />

<News title={titles[2]} newsdetail={news[2]} />

</div>

<div id='newscontainer'>

<News title={titles[3]} newsdetail={news[3]} />

<News title={titles[4]} newsdetail={news[4]} />

<News title={titles[5]} newsdetail={news[5]} />

</div>

<div id='newscontainer'>

<News title={titles[6]} newsdetail={news[6]} />

<News title={titles[7]} newsdetail={news[7]} />

<News title={titles[8]} newsdetail={news[8]} />

</div>

<Footer />

</div>

)

}

export default App;
