import React from 'react';
import './styles/Presentation.css';
import elsoImg from './assets/elso.png';
import gifImg from './assets/gif.gif';
import masodikImg from './assets/masodik.png';
import negyedikImg from './assets/negyedik.png';
import gif2Img from './assets/gif2.gif';
import gif3Img from './assets/gif3.gif';
import gif4Img from './assets/gif4.gif';
import gif5Img from './assets/gif5.gif';
import gif6Img from './assets/gif6.gif';

export const PresentationPage: React.FC = () => {
  return (
    <div className="presentation">
      {/* Header */}
      <header className="header">
        <h1>🏛️ Labirintus Kaland - Bemutató</h1>
        <p>Egy interaktív labirintus szerkesztő és játék alkalmazás</p>
      </header>

      {/* Tartalom */}
      <main className="content">
        {/* 1. Bevezetés */}
        <section className="section">
          <h2>📖 Bevezetés</h2>
          <div className="section-content">
            <div className="text-block">
              <p>
                A <strong>Labirintus Kaland</strong> egy C# WPF alkalmazás, amely lehetővé teszi 
                felhasználók számára, hogy saját labirintusokat szerkesszenek és játssanak. 
                Az alkalmazás támogatja több felhasználói interface elemet:
              </p>
              <ul>
                <li>Interaktív labirintus szerkesztő</li>
                <li>Játékterület kincskereséshez</li>
                <li>Többnyelvű felület (Magyar, English, Deutsch)</li>
                <li>Térképmentés és betöltés</li>
              </ul>
            </div>
            <div className="image-placeholder">
              <img src={elsoImg} alt="Alkalmazás bemutató képernyő" className="demo-image" />
            </div>
          </div>
        </section>

        {/* 2. Fő Funkcionalitás */}
        <section className="section">
          <h2>🎮 Fő Funkcionalitás</h2>
          
          {/* Játékmód */}
          <div className="subsection">
            <h3>🕹️ Játékmód</h3>
            <div className="section-content">
              <div className="text-block">
                <p>
                  A játékmódban a felhasználó egy labirintusban mozog és kincseket keres. 
                  A játékos az alábbi vezérlésekkel mozoghat:
                </p>
                <div className="controls-grid">
                  <div className="control-item">
                    <span className="key">W</span>
                    <span>Fel mozgás</span>
                  </div>
                  <div className="control-item">
                    <span className="key">A</span>
                    <span>Bal mozgás</span>
                  </div>
                  <div className="control-item">
                    <span className="key">S</span>
                    <span>Le mozgás</span>
                  </div>
                  <div className="control-item">
                    <span className="key">D</span>
                    <span>Jobb mozgás</span>
                  </div>
                </div>
              </div>
              <div className="image-placeholder">
                <img src={gifImg} alt="Játékterület GIF" className="demo-image" />
              </div>
            </div>
          </div>

          {/* Szerkesztő */}
          <div className="subsection">
            <h3>🛠️ Labirintus Szerkesztő</h3>
            <div className="section-content">
              <div className="text-block">
                <p>
                  A szerkesztő módban a felhasználók saját labirintusokat hozhatnak létre. 
                  Az alkalmazás grid-alapú szerkesztést biztosít, ahol különféle járatok és 
                  elemek helyezhetők el.
                </p>
              </div>
              <div className="image-placeholder">
                <img src={masodikImg} alt="Labirintus szerkesztő felület" className="demo-image small-image" />
              </div>
            </div>

            <h4>Szerkesztő Eszközök:</h4>
            <div className="tools-grid">
              <div className="tool-card">
                <div className="tool-icon black-box">⌐</div>
                <h5>Sarkok</h5>
                <p>╔ ╗ ╚ ╝</p>
              </div>
              <div className="tool-card">
                <div className="tool-icon black-box">⊢</div>
                <h5>T-Elágazások</h5>
                <p>╣ ╦ ╠ ╩</p>
              </div>
              <div className="tool-card">
                <div className="tool-icon black-box">═</div>
                <h5>Egyenes Járatok</h5>
                <p>║ ═</p>
              </div>
              <div className="tool-card">
                <div className="tool-icon black-box">✜</div>
                <h5>Kereszteződés</h5>
                <p>╬</p>
              </div>
              <div className="tool-card">
                <div className="tool-icon black-box">🎁</div>
                <h5>Kincsek</h5>
                <p>█</p>
              </div>
              <div className="tool-card">
                <div className="tool-icon black-box">⬛</div>
                <h5>Falak</h5>
                <p>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Térképstruktúra */}
        <section className="section">
          <h2>🗺️ Térképstruktúra</h2>
          <div className="section-content">
            <div className="text-block">
              <p>
                A térképek szövegfájlok formájában tárolódnak, ahol minden karakter egy 
                labirintus elemet reprezentál:
              </p>
              <div className="code-block">
                {`╔═╗.╩═╦
║█║.║.║
╣.╠.╣.╣
║.║.║█║
╠═╩═╩═╝`}
              </div>
              <p><strong>Karakterek magyarázata:</strong></p>
              <table className="char-table">
                <tbody>
                  <tr><td><code>║</code></td><td>Függőleges járat</td></tr>
                  <tr><td><code>═</code></td><td>Vízszintes járat</td></tr>
                  <tr><td><code>╬</code></td><td>4-útkereszteződés</td></tr>
                  <tr><td><code>█</code></td><td>Kincs</td></tr>
                  <tr><td><code>.</code></td><td>Fal/nem járható</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. Felhasználói Interfész */}
        <section className="section">
          <h2>🎨 Felhasználói Interfész</h2>
          
          <div className="subsection">
            <h3>📋 Menü Képernyő</h3>
            <div className="section-content">
              <div className="image-placeholder">
                <img src={negyedikImg} alt="Menü felület" className="demo-image small-image" />
              </div>
              <div className="text-block">
                <p><strong>Funkciók:</strong></p>
                <ul>
                  <li><strong>Térkép Betöltés</strong> - Meglévő térképek betöltése</li>
                  <li><strong>Nyelvválasztás</strong> - 2 elérhető nyelv</li>
                  <li><strong>Falak Láthatósága</strong> - Rejtett vagy látható módok</li>
                  <li><strong>Játék Indítása</strong> - A játék elkezdése</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3>🌍 Nyelvek</h3>
            <div className="languages-grid">
              <div className="lang-card">
                <h4>Magyar</h4>
              </div>
              <div className="lang-card">
                <h4>English</h4>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Játékleírás */}
        <section className="section">
          <h2>🎯 Játékleírás</h2>
          <div className="section-content">
            <div className="text-block">
              <h3>Cél</h3>
              <p>
                A játékos célja, hogy bejárja a labirintust, megtalálja az összes kincseket 
                (█ szimbólumok), majd sikeresen kijusson a labirintusból.
              </p>
              <h3>Szabályok</h3>
              <ul>
                <li>Csak járatokon mozoghat (╬ ║ ═ ╣ ╦ ╠ ╩ ╔ ╗ ╚ ╝)</li>
                <li>Falakban (.) nem lehet átmenni</li>
                <li>Kincseket (█) kell gyűjteni</li>
                <li>Nem lehet kijutni, amíg nem gyűjtött össze minden kincsot</li>
              </ul>
              <h3>Nyerés</h3>
              <p>
                A játékos nyer, ha sikeresen gyűjtötte az összes kincsot és kijutott a labirintusból.
              </p>
            </div>
            <div className="image-placeholder">
              <img src={gif2Img} alt="Sikeres játék végeredmény" className="demo-image small-image" />
            </div>
          </div>
        </section>

        {/* 6. Technikai Megvalósítás */}
        <section className="section">
          <h2>⚙️ Technikai Megvalósítás</h2>
          <div className="section-content section-content--wide">
            <div className="text-block">
              <p><strong>Technológiák:</strong></p>
              <ul>
                <li><strong>Fő Alkalmazás:</strong> C# WPF (Windows Presentation Foundation)</li>
                <li><strong>Web Verzió:</strong> TypeScript + React</li>
                <li><strong>Architektúra:</strong> Model-View szeparáció</li>
              </ul>
              <p><strong>Főbb Komponensek:</strong></p>
              <ul>
                <li><code>MainWindow.xaml.cs</code> - Fő UI logika</li>
                <li><code>Game.cs</code> - Játéklogika és állapotkezelés</li>
                <li><code>Maker.cs</code> - Szerkesztő logika</li>
                <li><code>Helper.cs</code> - Segédfunkciók (irányok, tile-ok)</li>
                <li><code>Language.cs</code> - Lokalizáció</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Ábra - Gyakorlati Folyamat */}
        <section className="section">
          <h2>📊 Alkalmazás Folyamata</h2>
          <div className="flow-diagram">
            <div className="flow-step">
              <div className="step-number">1</div>
              <h4>Alkalmazás Indítása</h4>
              <p>Menü megjelenítése</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <h4>Térkép Választás</h4>
              <p>Fájl kiválasztása</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <h4>Játék Mód</h4>
              <p>Labirintus megjelenítése</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <h4>Kincskeresés</h4>
              <p>Elemek gyűjtése</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">5</div>
              <h4>Kijutás</h4>
              <p>Győzelem/Vereség</p>
            </div>
          </div>
        </section>

        {/* 8. Szerkesztő Lépésről Lépésre */}
        <section className="section">
          <h2>🛠️ Szerkesztő Használata - Lépésről Lépésre</h2>
          
          <div className="step-section">
            <h3>1. lépés: Új Térkép Létrehozása</h3>
            <div className="section-content">
              <div className="text-block">
                <p>Az alkalmazásban kattintson a "Szerkesztő" gombra, majd:</p>
                <ol>
                  <li>Adjuk meg a térkép szélesség és magasságát</li>
                  <li>Kattintson az "Új Térkép" gombra</li>
                  <li>Egy üres grid jelenik meg szerkesztésre</li>
                </ol>
              </div>
              <div className="image-placeholder">
                <img src={gif3Img} alt="Méret beállítási képernyő" className="demo-image small-image" />
              </div>
            </div>
          </div>

          <div className="step-section">
            <h3>2. lépés: Ecset Kiválasztása</h3>
            <div className="section-content">
              <div className="text-block">
                <p>
                  Az ecset palletta a szerkesztő jobb oldalán található. Válasszon az alábbi 
                  elemek közül:
                </p>
                <ul>
                  <li>Sarkok (4 darab)</li>
                  <li>T-elágazások (4 darab)</li>
                  <li>Egyenes járatok</li>
                  <li>Kereszteződés</li>
                  <li>Kincsek és falak</li>
                </ul>
              </div>
              <div className="image-placeholder">
                <img src={gif4Img} alt="Ecset paletta" className="demo-image small-image" />
              </div>
            </div>
          </div>

          <div className="step-section">
            <h3>3. lépés: Rajzolás</h3>
            <div className="section-content">
              <div className="text-block">
                <p>
                  Bal egérkattintással kattintson a grid cellájára az elem elhelyezéséhez. 
                  A labirintust úgy kell szerkeszteni, hogy:
                </p>
                <ul>
                  <li>Össze lehessen máknak az elemeket</li>
                  <li>Legyen legalább egy bejárat és egy kijárat</li>
                  <li>Legalább egy kincs legyen a térképen</li>
                </ul>
              </div>
              <div className="image-placeholder">
                <img src={gif5Img} alt="Szerkesztés alatt lévő térkép" className="demo-image small-image" />
              </div>
            </div>
          </div>

          <div className="step-section">
            <h3>4. lépés: Mentés</h3>
            <div className="section-content">
              <div className="text-block">
                <p>
                  Az elkészült térkép mentéséhez kattintson a "Térkép Mentése" gombra. 
                  A térkép szövegfájlként kerül mentésre, amely később betölthető és 
                  játszható.
                </p>
              </div>
              <div className="image-placeholder">
                <img src={gif6Img} alt="Mentési párbeszéd" className="demo-image small-image" />
              </div>
            </div>
          </div>
        </section>

        {/* 10. Összefoglalás */}
        <section className="section conclusion">
          <h2>🎓 Összefoglalás</h2>
          <div className="summary-boxes">
            <div className="summary-box">
              <h3>✓ Jellemzők</h3>
              <ul>
                <li>Interaktív szerkesztő</li>
                <li>Játékmód kincskereséshez</li>
                <li>Többnyelvű felület</li>
                <li>Térképmentés/betöltés</li>
              </ul>
            </div>
            <div className="summary-box">
              <h3>🎮 Játékmechanika</h3>
              <ul>
                <li>WASD vezérlés</li>
                <li>Kincskeresés</li>
                <li>Falak és járatok</li>
                <li>Lépésről lépésre haladás</li>
              </ul>
            </div>
            <div className="summary-box">
              <h3>🛠️ Szerkesztés</h3>
              <ul>
                <li>Grid alapú szerkesztés</li>
                <li>Ecset palletta</li>
                <li>Szabad térkép design</li>
                <li>Szöveg fájl export</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>🏛️ Labirintus Kaland - Bemutató Oldal</p>
        <p>Készült TypeScript + React-tal</p>
      </footer>
    </div>
  );
};
