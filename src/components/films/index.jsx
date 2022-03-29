import { useState } from "react";
import "./films.css";

export default function Films() {
  const [selectedLanguage, setSelectedLanguage] = useState('null');

  const languageData = [
    {
      languageName: "ENGLISH",
      languageValue: "english",
    },
    {
      languageName: "HINDI",
      languageValue: "hindi",
    },
    {
      languageName: "MARATHI",
      languageValue: "marathi",
    },
    {
      languageName: "GUJARATI",
      languageValue: "gujarati",
    },
  ];
  const filmsImageBoxData = [
    {
      itemNumber: 1,
      itemLanguage: "marathi",
      itemImage: "images/films/films-1.png",
      itemHead: "Agantuk",
      itemYear: 1991,
    },
    {
      itemNumber: 2,
      itemLanguage: "english",
      itemImage: "images/films/films-2.png",
      itemHead: "Charulata",
      itemYear: 1964,
    },
    {
      itemNumber: 3,
      itemLanguage: "hindi",
      itemImage: "images/films/films-3.png",
      itemHead: "Ghare-Baire",
      itemYear: 1964,
    },
    {
      itemNumber: 4,
      itemLanguage: "gujarati",
      itemImage: "images/films/films-4.png",
      itemHead: " Pather Panchali",
      itemYear: 1955,
    },
  ];

  const filmsselect = (language) => {
    setSelectedLanguage(language);
    console.log("======Films Language Selected======= ", language);
  };

  return (
    <div class="films">
      <div class="films__content h-100">
        <div class="films__content__left">
          <div class="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap mb-5 mb-md-0">
            <h3>Films</h3>
            <div class="films__select justify-content-center justify-content-md-between">
              <span class="head">Național Film Awarded</span>
              {languageData && languageData != undefined ? (
                <span class="select__wrapper">
                  <select
                    name="films"
                    id=""
                    onChange={(e) => filmsselect(e.target.value)}
                  >
                    <option value={'null'} selected>
                      LANGUAGE
                    </option>
                    {languageData.map((item) => {
                      return (
                        <option value={item.languageValue}>
                          {item.languageName}
                        </option>
                      );
                    })}
                  </select>
                </span>
              ) : null}
            </div>
          </div>
          <div class="films__content__image__box">
            {filmsImageBoxData && filmsImageBoxData != undefined ? (
              <div class="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap">
                { selectedLanguage==='null' ?
                    filmsImageBoxData.map((item) => {
                    return (
                        <div class="image__box__item" key={item.itemNumber}>
                        <span className="ribbin">{item.itemLanguage}</span>
                        <div class="image-wrapper">
                            <img src={item.itemImage} class="img-fluid" alt="" />
                        </div>
                        <div class="mt-3">
                            <p class="mb-0"> {item.itemHead} </p>
                            <p>{item.itemYear}</p>
                        </div>
                        </div>
                    );
                    })
                :
                filmsImageBoxData.map((item) => {
                    if(selectedLanguage == item.itemLanguage){
                        return (
                            <div class="image__box__item" key={item.itemNumber}>
                            <span className="ribbin">{item.itemLanguage}</span>
                            <div class="image-wrapper">
                                <img src={item.itemImage} class="img-fluid" alt="" />
                            </div>
                            <div class="mt-3">
                                <p class="mb-0"> {item.itemHead} </p>
                                <p>{item.itemYear}</p>
                            </div>
                            </div>
                        );
                    }
                    }) }
              </div>
            ) : null}
          </div>
          <div class="d-flex align-items-center justify-content-center my-3 mt-md-3">
            <button type="button" class="btn border-secondary px-4">
              VIEW ALL
            </button>
          </div>
        </div>
        <div class="films__content__right">
          <img src="images/camera.png" class="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}
