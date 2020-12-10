import React , {useEffect, useState} from 'react';
import './PlayerContainer.css'
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import Music from '../Music/Music'
import DisplayBox from '../DisplayBox/DisplayBox'

function PayerContainer() {
  let [showImage, setShowImage] = useState(false)
  let [showMap, setShowMap] = useState(false)
  let [showSongs, setShowSongs] = useState(false)


  const displayImage = () => {
    setShowImage(!showImage)
  }
  const displayMap = () => {
    setShowMap(!showMap)
  }
  const displaySongs = () => {
    setShowSongs(!showSongs)
  }

  // useEffect(() => {
   

  // }, [displayImage])
    return (
      <React.Fragment>
      <div>
      <DisplayBox 
      displayImage={showImage}
      displayMap={showMap} 
      displaySongs={showSongs}
      />
      </div>

    <div className="audio_player">
      <div className="title">
        Motigbana: Olamide
      </div>
      <div className="toggle_buttons">
        <ListOutlinedIcon onClick={displaySongs} />
        <ImageOutlinedIcon onClick={displayImage} />
        <MapOutlinedIcon onClick={displayMap}  />
      </div>
    <div className="audio_player-container">
         <Music/>  
         </div>
    <div className="tracks">
          <div className="btn">
						<a id="btnPrev">&#8617;</a>
            <a id="btnNext">&#8618;</a>
            </div>
						<select id="language" placeholder="Language" name="language" className="language-select">
							<option title="English" r-value="1" value="en">English</option>
							<option title="Afrikaans" r-value="" value="af" disabled="">Afrikaans (af)</option>
							<option title="Arabic" r-value="8" value="ar">عربي (ar)</option>
							<option title="Azerbaijani" r-value="" value="az" disabled="">Azərbaycanca (az)</option>
							<option title="Bambara" r-value="" value="bm" disabled="">Bamanankan (bm)</option>
							<option title="Bengali (Bangladesh)" r-value="" value="bn-BD" disabled="">বাংলা (বাংলাদেশ) (bn-BD)</option>
							<option title="Bengali (India)" r-value="" value="bn-IN" disabled="">বাংলা (ভারত) (bn-IN)</option>
							<option title="Catalan" r-value="" value="ca" disabled="">Català (ca)</option>
							<option title="Czech" r-value="" value="cs" disabled="">Čeština (cs)</option>
							<option title="Chinese (Simplified)" r-value="9" value="zh-CN">中文 (简体) (zh-CN)</option>
							<option title="Chinese (Traditional)" r-value="" value="zh-TW" disabled="">正體中文 (繁體) (zh-TW)</option>
							<option title="Danish" r-value="14" value="da">Dansk (da)</option>
							<option title="German" r-value="10" value="de">Deutsch (de)</option>
							<option title="Ewe" r-value="" value="ee" disabled="">Eʋe (ee)</option>
							<option title="Greek" r-value="" value="el" disabled="">Ελληνικά (el)</option>
							<option title="Spanish" r-value="5" value="es">Español (es)</option>
							<option title="Persian" r-value="" value="fa" disabled="">فارسی (fa)</option>
							<option title="Fulah" r-value="" value="ff" disabled="">Pulaar-Fulfulde (ff)</option>
							<option title="Finnish" r-value="" value="fi" disabled="">suomi (fi)</option>
							<option title="French" r-value="6" value="fr">Français (fr)</option>
							<option title="French" r-value="7" value="fr-ca">Français Canadien (fr-ca)</option>
							<option title="Frisian" r-value="" value="fy-NL" disabled="">Frysk (fy-NL)</option>
							<option title="Irish" r-value="" value="ga-IE" disabled="">Gaeilge (ga-IE)</option>
							<option title="Hausa" r-value="" value="ha" disabled="">Hausa (ha)</option>
							<option title="Hebrew" r-value="" value="he" disabled="">עברית (he)</option>
							<option title="Hindi (India)" r-value="3" value="hi-IN">हिन्दी (भारत) (hi-IN)</option>
							<option title="Croatian" r-value="" value="hr" disabled="">Hrvatski (hr)</option>
							<option title="Hungarian" r-value="22" value="hu">magyar (hu)</option>
							<option title="Indonesian" r-value="" value="id" disabled="">Bahasa Indonesia (id)</option>
							<option title="Igbo" r-value="" value="ig" disabled="">Igbo (ig)</option>
							<option title="Italian" r-value="11" value="it">Italiano (it)</option>
							<option title="Japanese" r-value="12" value="ja">日本語 (ja)</option>
							<option title="Georgian" r-value="" value="ka" disabled="">ქართული (ka)</option>
							<option title="Kabyle" r-value="" value="kab" disabled="">Taqbaylit (kab)</option>
							<option title="Korean" r-value="13" value="ko">한국어 (ko)</option>
							<option title="Lingala" r-value="" value="ln" disabled="">Lingála (ln)</option>
							<option title="Malagasy" r-value="" value="mg" disabled="">Malagasy (mg)</option>
							<option title="Malayalam" r-value="" value="ml" disabled="">മലയാളം (ml)</option>
							<option title="Malay" r-value="" value="ms" disabled="">Melayu (ms)</option>
							<option title="Norsk" r-value="21" value="no">Norsk (no)</option>
							<option title="Burmese" r-value="" value="my" disabled="">မြန်မာဘာသာ (my)</option>
							<option title="Dutch" r-value="4" value="nl">Nederlands (nl)</option>
							<option title="Polish" r-value="20" value="pl">Polski (pl)</option>
							<option title="Portuguese (Brazilian)" r-value="" value="pt-BR" disabled="">Português (do Brasil) (pt-BR)</option>
							<option title="Portuguese (Portugal)" r-value="15" value="pt-PT">Português (Europeu) (pt-PT)</option>
							<option title="Romanian" r-value="19" value="ro">Română (ro)</option>
							<option title="Russian" r-value="16" value="ru">Русский (ru)</option>
							<option title="Songhai" r-value="" value="son" disabled="">Soŋay (son)</option>
							<option title="Albanian" r-value="" value="sq" disabled="">Shqip (sq)</option>
							<option title="Serbian" r-value="" value="sr" disabled="">Српски (sr)</option>
							<option title="Serbian" r-value="" value="sr-Latn" disabled="">Srpski (sr-Latn)</option>
							<option title="Swedish" r-value="18" value="sv-SE">Svenska (sv-SE)</option>
							<option title="Swahili" r-value="" value="sw" disabled="">Kiswahili (sw)</option>
							<option title="Tamil" r-value="" value="ta" disabled="">தமிழ் (ta)</option>
							<option title="Thai" r-value="" value="th" disabled="">ไทย (th)</option>
							<option title="Tagalog" r-value="" value="tl" disabled="">Tagalog (tl)</option>
							<option title="Tswana" r-value="" value="tn" disabled="">Setswana (tn)</option>
							<option title="Turkish" r-value="17" value="tr">Türkçe (tr)</option>
							<option title="Ukrainian" r-value="" value="uk" disabled="">Українська (uk)</option>
							<option title="Vietnamese" r-value="" value="vi" disabled="">Tiếng Việt (vi)</option>
							<option title="Wolof" r-value="" value="wo" disabled="">Wolof (wo)</option>
							<option title="Welsh" r-value="2" value="cy" disabled="">Cymraeg (cy)</option>
							<option title="Xhosa" r-value="" value="xh" disabled="">isiXhosa (xh)</option>
							<option title="Yoruba" r-value="" value="yo" disabled="">Yorùbá (yo)</option>
							<option title="Zulu" r-value="" value="zu" disabled="">isiZulu (zu)</option>
						</select>
					</div>
  </div>
  </React.Fragment>
    )

}

export default PayerContainer