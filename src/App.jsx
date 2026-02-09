import { useEffect, useRef } from "react";


import './App.css'
import img1 from "./img/r1.png";
import img2 from "./img/r2.png";
import img3 from "./img/r3.png";
import img4 from "./img/r4.png";
import img5 from "./img/r5.png";
import img6 from "./img/r6.png";
import img7 from "./img/r7.png";
import img8 from "./img/r8.png";
import logo from "./img/logo.png";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";
import icon5 from "./img/icon5.png";
import icon6 from "./img/icon6.png";
import icon7 from "./img/icon7.png";
import logo2 from "./img/logo2.png";
import ii from "./img/img1.png";
import back3 from "./img/25.png";
import back1 from "./img/23.png";
import back2 from "./img/24.png";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
function App() {
    useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
          else {
            // 👇 화면에서 사라지면 show 제거 → 다시 실행 가능
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );
        const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
useEffect(() => {
  const wraps = document.querySelectorAll(".rolling-wrap");
  const cleanups = [];

  wraps.forEach((wrap) => {
    const dir = wrap.dataset.dir; // left / right
    const trackA = wrap.querySelector('[data-track="a"]');
    const trackB = wrap.querySelector('[data-track="b"]');
    if (!trackA || !trackB) return;

    let xA = 0;
    let xB = 0;
    let w = 0;

    const speed = 1; // ✅ 속도

    const setup = () => {
      // ✅ 여기서만 width 측정 (고정)
      w = trackA.scrollWidth;

      xA = 0;
      xB = w;

      trackA.style.transform = `translate3d(${xA}px,0,0)`;
      trackB.style.transform = `translate3d(${xB}px,0,0)`;
    };

    // ✅ 이미지 로딩 끝난 뒤에 정확한 width 잡기
    const waitImages = async () => {
      const imgs = wrap.querySelectorAll("img");
      await Promise.all(
        [...imgs].map(
          (img) =>
            img.complete
              ? Promise.resolve()
              : new Promise((res) => {
                  img.onload = res;
                  img.onerror = res;
                })
        )
      );
      setup();
    };

    waitImages();

    let rafId;

    const loop = () => {
      if (!w) {
        rafId = requestAnimationFrame(loop);
        return;
      }

      if (dir === "left") {
        xA -= speed;
        xB -= speed;

        // ✅ 완전히 빠지면 뒤로 보내기
        if (xA <= -w) xA = xB + w;
        if (xB <= -w) xB = xA + w;
      } else {
        xA += speed;
        xB += speed;

        if (xA >= w) xA = xB - w;
        if (xB >= w) xB = xA - w;
      }

      trackA.style.transform = `translate3d(${xA}px,0,0)`;
      trackB.style.transform = `translate3d(${xB}px,0,0)`;

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    window.addEventListener("resize", setup);

    const cleanup = () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", setup);
    };

    cleanups.push(cleanup);
  });

  return () => cleanups.forEach((c) => c());
}, []);

  return (
    <>
    <header className="hero">
      
      <div className="head hidden">
        <img src={logo} className="logo"/>
        <div className="h">
        <h1 className="firsth1">데이터로 판단하고,</h1>
        <h1>성과로 증명합니다</h1>
        <p>데이터로 증명하는 퍼포먼스</p>
        <p>구글 광고의 최적의 해답을 설계합니다.</p>
        <button onClick={()=>scrollToSection("신청고고")}>광고문의 바로가기</button>
      </div></div>
    </header>
    <section className="sec1">
      <div className="div1">
        <h1>퍼포먼스 기반 전략</h1>
        </div>
        
    </section>
    <section>
      <div className="cardContainer hidden">
          <div className="card">
            <h2>검색</h2>
            <p>디스플레이ㆍ유튜브 통합 운영</p>
          </div>
          <div className="card">
            <h2>실시간 분석</h2>
            <p>광고 효율을 끝까지 올린 전략</p>
          </div>
          <div className="card">
            <h2>ROAS 중심</h2>
            <p>매출ㆍ전환가치에 집중</p>
          </div>
        </div>
    </section>
    <section className="sect2">
      <div className="sec2">
        <h1>Marketing Solution</h1>
        <h2>노출 뿐만이 아닌 성장,</h2>
        <h2>성과로 이어지는 광고 전략</h2>
        <div className="paperContainer">
          <div className="paper hidden">
            <img src={icon1} className="icon1"/>
            <h2>구글 애즈 전문 마케팅</h2>
            <p>구글 검색광고, 디스플레이, 유튜브</p>
            <p>쇼핑 광과까지 플랫폼 구조를 이해한</p>
            <p>전문 운영으로 업종과 목적에 맞는</p>
            <p>캠페인 구조를 설계합니다.</p>
          </div>
          <div className="paper hidden">
            <img src={icon2} className="icon1"/>
            <h2>운영 솔루션</h2>
            <p>전환 추적 세팅부터 오디언스 구성,</p>
            <p>리타겟팅까지 광고 집행에 필요한 핵심 요소를</p>
            <p>체계적으로 세팅하고 실시간 데이터를</p>
            <p>기반으로 운영 흐름을 관리합니다.</p>
          </div>
          <div className="paper hidden">
            <img src={icon3} className="icon1"/>
            <h2>성과 중심의 전략</h2>
            <p>노출과 클릭이 아닌 전환과 결관를</p>
            <p>기준으로 비효율 캠페인은 정리하고</p>
            <p>성과가 나는 영역에 예산을</p>
            <p>집중해서 관리합니다.</p>
          </div>
          <div className="paper hidden">
            <img src={icon4} className="icon1"/>
            <h2>ROAS 최적화를 설계</h2>
            <p>광고비 대비 성과를 수치로 분석해</p>
            <p>목표 ROAS에 맞는 입찰 전략과</p>
            <p>구조를 설계하고 지속적으로</p>
            <p>효율을 개선합니다.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="sec3">
        <h1>We can do this</h1>
        <h2>기획부터 제작까지 내부에서 완성됩니다.</h2>
        <p>성과 흐름을 이해한 자체제작 시스템, 데이터를 아는 팀이 직접 만듭니다.</p>
        <div className="box-container">
          <div className="box hidden">
            <div className="circle">
              <img src={icon5} className="icon5"/>
            </div>
            <h4>어플리케이션 기획ㆍ제작</h4>
            <p>사용자 흐름과 전환 구조를 고려해</p>
            <p>서비스 목적에 맞는 어플리케이션을 기획하고 제작합니다.</p>
            <p>기능 구현뿐 아니라 실제 사용성과 성과를 기준으로 설계합니다.</p>
          </div>
          <div className="box hidden">
            <div className="circle">
              <img src={icon6} className="icon5"/>
            </div>
            <h4>동영상 콘텐츠 제작</h4>
            <p>광고와 랜딩 환경에 맞는 영상 구조를 설계해</p>
            <p>시선 확보부터 메세지 전달까지</p>
            <p>성과를 고려한 동영상 콘텐츠를 제작합니다.</p>
          </div>
          <div className="box hidden">
            <div className="circle">
              <img src={icon7} className="icon5"/>
            </div>
            <h4>웹디자인 및 UI/UX</h4>
            <p>데이터 흐름과 사용자 행동을 기반으로</p>
            <p>전환에 유리한 화면 구조와 디자인을 설계합니다.</p>
            <p>보기 좋은 디자인보다, 작동하는 디자인을 만듭니다.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="sect4 hidden">
      <div className="sec4">
        <div className="f">
       
        <div>
        <h2><span>채널을 넘나드는</span></h2>
        <h2><span>퍼포먼스 마케팅</span></h2>
        <h4>성과 흐름을 이해한 최적화된 전략</h4></div>
        
         <img src={logo2} className="logo2"/>
        </div>
<div className="rolling-section">
  {/* 위: 왼쪽으로 흐름 */}
  <div className="rolling-row left">
    <div className="rolling-wrap" data-dir="left">
      <div className="rolling-track" data-track="a">
        {/* ✅ 1세트 */}
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />

        {/* ✅ 2세트 */}
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />

        {/* ✅ 3세트 */}
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />
      </div>

      <div className="rolling-track" data-track="b">
        {/* ✅ 1세트 */}
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />

        {/* ✅ 2세트 */}
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />

        {/* ✅ 3세트 */}
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />
      </div>
    </div>
  </div>

  {/* 아래: 오른쪽으로 흐름 */}
  <div className="rolling-row right">
    <div className="rolling-wrap" data-dir="right">
      <div className="rolling-track" data-track="a">
        {/* ✅ 1세트 */}
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />

        {/* ✅ 2세트 */}
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />

        {/* ✅ 3세트 */}
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />
      </div>

      <div className="rolling-track" data-track="b">
        {/* ✅ 1세트 */}
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />

        {/* ✅ 2세트 */}
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />

        {/* ✅ 3세트 */}
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
    <section className="sect5 ">
      <div className='sec5 hidden'>
<h4>저희는 만들고 끝내지 않습니다</h4>
      <h4>성과로 이어질 때 까지</h4>
      <h2>관리합니다.</h2>
    <div className="f1">  
      <div className="f3">
      <h5>광고ㆍ제작 통합 전략 문의</h5>
      <button onClick={()=>scrollToSection("신청고고")}>알아보기</button>
      </div>
      
        <img src={ii} className="ii"/>
      </div></div>
    </section>
    <section>
      <div className="sec6">
        <h1>데이터와 성과 지표</h1>
        <p>광고 집행부터 전환 이후의 데이터까지 분석해</p>
        <p>성과 지표를 기준으로 캠페인을 운영합니다.</p>

<div className="metricWrap">
  <div className="metricCard m1">
    <div className="metricText">
      <h2>전환 및 성과 분석</h2>
      <p>클릭 이후 어떤 행동이 일어나는지 전환 데이터로 명확히 분석합니다.</p>
      <p>문의, 신청, 구매 등 비즈니스에 실제로 의미 있는 지표만을</p>
      <p>기준으로 광고 성과를 판단합니다.</p>
    </div>
    <img src={back1} className="metricImg m11" alt="" />
  </div>

  <div className="metricCard m2">
    <div className="metricText">
      <h2>모든 결과는 수치로 확인 가능합니다.</h2>
      <p>광고는 감각이 아니라</p>
      <p>데이터와 지표로 관리되어야 합니다.</p>
    </div>
    <img src={back2} className="metricImg" alt="" />
  </div>

  <div className="metricCard m3">
    <div className="metricText">
      <h2>변동성은 관리되고, 성과는 안정됩니다.</h2>
      <p>비효율 구간을 빠르게 감지해 손실을 줄여</p>
      <p>광고비 대비 성과가 유지되는 구조를 만듭니다.</p>
    </div>
    <img src={back3} className="metricImg" alt="" />
  </div>
</div>



      </div>
    </section>
    <section>
      <div className="sec7 hidden">
        <h1>차별화된 마케팅으로</h1>
        <h1>성장할 수 있습니다.</h1>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWmZj84_fFBZqJwjulQJHpmaAdQ_Z-zmWvhnPOOup5pecAVQ/viewform?usp=publish-editor"
   target="_blank"
   rel="noopener noreferrer">
  <button id="신청고고">광고문의 바로가기</button>
</a>

      </div>
    </section>
    <footer>
      <div className="foot">
        <hr/>
        <p>대연아이앤씨</p>
        <p>대표자: 허승우</p>
        <p>사업자등록번호:665-60-00626</p>
      </div>
    </footer>
    </>
  )
}

export default App
