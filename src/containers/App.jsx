import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/styles/App.scss";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

const App = () => {
    const [videos, setVideos] = useState({
        mylist: [],
        trends: [],
        originals: [],
    });

    useEffect(() => {
        fetch("http://localhost:3000/initalState")
            .then((response) => response.json())
            .then((data) => setVideos(data));
    }, []);

    console.log("vide", videos);

    return (
        <div className="App">
            <Header />
            <Search />
            {videos.mylist.length > 0 && (
                <Categories title="Mi lista">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            )}

            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends.map((item) => (
                        <CarouselItem key={item.id} {...item} />
                    ))}
                </Carousel>
            </Categories>

            <Categories title="Originales de PlatziVideo">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Footer />
        </div>
    );
};

export default App;
