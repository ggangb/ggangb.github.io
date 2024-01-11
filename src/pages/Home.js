import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../img/profile.png'
import logo1 from '../img/football.png'
import logo2 from '../img/mark-github.svg'
import logo3 from '../img/globe.svg'
import logo4 from '../img/yeongyang.png'
import logo5 from '../img/logo.jpg'


function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container className="justify-content-md-center mx-auto">

            <Row className="justify-content-md-center mx-auto">
                <Col className='mt-5' xs={8} >
                    <Row className="align-items-center">
                        {windowWidth > 768 ? (
                            <Col xs={3}>
                                <Image src={logo} roundedCircle style={{ width: '100%' }} />
                            </Col>
                        ) : null}
                        <Col className="d-flex align-items-center ms-1"  >
                            <h1 className='fw-bolder' style={{ letterSpacing: '1px', lineHeight: '1.15' }}>
                                안녕하세요
                                <br />
                                웹 개발자
                                <br />
                                <span className='text-success'>강병규</span>
                                입니다.
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul className='mt-3'>
                                <li className='p-1'><strong className='fw-bold'>만들면서 학습</strong> 하는 것을 좋아합니다.</li>
                                <li className='p-1'>개발 과정에서의 문제를 <strong className='fw-bold'>고민하고 해결</strong>하는 과정을 즐깁니다.</li>
                                <li className='p-1'>실패를 두려워하지 않고, 실패를 통해 <strong className='fw-bold'>배우고 성장</strong>하는 것에 중점을 두고 있습니다.</li>
                                <li className='p-1'><strong className='fw-bold'>책임감과 집념</strong>을 바탕으로 일에 몰두하는 웹 개발자입니다. 어떤 프로젝트라도 완성하기 위해 노력하고, 주어진 일정과 요구사항을 충족시키는 것에 최선을 다할 것을 약속드립니다.</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <h2 className='fw-bold' style={{ letterSpacing: '1px' }}>Personal Project.</h2>
                        <div className='mt-2 mb-5 bg-gray' style={{ height: '1px', backgroundColor: '#dee2e6' }}></div>
                        <Col className='text-center mt-4' xs={12} sm={6} md={4} lg={3}>
                            <Image src={logo1} roundedCircle style={{ width: '100%' }} />
                            <h3 className='mt-3 text-center fw-bold'>풋볼 모아</h3>
                            <a href="https://github.com/ggangb/project3-frontend" target="_blank" rel="noreferrer"><Image src={logo2} roundedCircle style={{ width: '25px' }} /></a>
                            <a href="https://github.com/ggangb/project3-backend" target="_blank" rel="noreferrer"><Image className="ms-2" src={logo2} roundedCircle style={{ width: '25px' }} /></a>
                            <a href="https://footballmoafront.azurewebsites.net" target="_blank" rel="noreferrer"><Image className="ms-2" src={logo3} roundedCircle style={{ width: '25px' }} /> </a>
                        </Col>

                        <Col className="ms-1 border-start" >
                            <blockquote className="blockquote p-3" style={{ backgroundColor: '#eeee', borderRadius: '10px', width: '100%', }}>
                                <p className="fw-normal"> 해외축구 뉴스,순위,기록,경기결과/일정 데이터들과 게시판기능을 합친 <br />축구커뮤니티</p>
                            </blockquote>
                            <div className=''>
                                <Image src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" />
                                <Image src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" />
                                <Image src="https://img.shields.io/badge/azure-0078D7?style=for-the-badge&logo=microsoftazure&logoColor=white" />
                                <Image src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
                                <Image src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white" />
                            </div>
                            <div>
                                <ul className='mt-3'>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>SpringSecurity</strong>와 <strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>JWT</strong>을 이용해 인증과 인가 구현</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>NaverNewsAPI</strong>를 사용한 뉴스 데이터</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>ScoreBatAPI</strong>를 사용한 경기결과/일정 데이터</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>FootBall-Data API</strong>를 사용한 순위,기록 데이터</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>MongoDB</strong>를 통한 NoSQL데이터베이스 경험</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>Docker</strong>를 사용해 일관된 개발환경 구성</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>Github actions</strong>과 <strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>Azure App Service</strong>를 통한 CI/CD 구현</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <h2 className='fw-bold' style={{ letterSpacing: '1px' }}>Team Project.</h2>
                        <div className='mt-2 mb-5 bg-gray' style={{ height: '1px', backgroundColor: '#dee2e6' }}></div>
                        <Col className='text-center mt-4' xs={12} sm={6} md={4} lg={3}>
                            <Image src={logo4} roundedCircle style={{ width: '100%' }} />
                            <h3 className='mt-3 text-center fw-bold'>Nutrients</h3>
                            <p><p>2022.10.17 ~ 2022.11.28</p></p>
                            <a href="https://github.com/ggangb/SpringBoot" target="_blank" rel="noreferrer"><Image src={logo2} roundedCircle style={{ width: '25px' }} /></a>
                            <a href="https://github.com/ggangb/React" target="_blank" rel="noreferrer"><Image className="ms-2" src={logo2} roundedCircle style={{ width: '25px' }} /></a>
                            <a href="http://yeongyang.kro.kr" target="_blank" rel="noreferrer"><Image className="ms-2" src={logo3} roundedCircle style={{ width: '25px' }} /> </a>
                        </Col>

                        <Col className="ms-1 border-start" >
                            <blockquote className="blockquote p-3" style={{ backgroundColor: '#eeee', borderRadius: '10px', width: '100%', }}>
                                <p className="fw-normal"> 각종 영양제를 구매할 수 있고 추천 받을 수 있는 <br />영양제쇼핑몰</p>
                            </blockquote>
                            <div className=''>
                                <Image src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" />
                                <Image src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
                                <Image src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
                                <Image src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white" />
                                <Image src="https://img.shields.io/badge/amazonrds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white" />
                            </div>
                            <div>
                                <ul className='mt-3'>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>KAKAO API</strong>를 사용한 카카오페이 구현</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>주문화면페이지</strong>와 주문기능 구현</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>관리자페이지</strong>와 주문관리,상품관리,회원관리,문의글관리,리뷰관리 기능 구현</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>상품상세페이지</strong>와 상품상세정보,문의글작성,리뷰 구현</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>마이페이지</strong>와 장바구니,리뷰작성 기능 구현</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>AMAZONE EC2</strong>로 서비스 배포</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>AMAZONE RDS</strong>로 데이터베이스 관리</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col className='text-center mt-4' xs={12} sm={6} md={4} lg={3}>
                            <Image src={logo5} roundedCircle style={{ width: '50%' }} />
                            <h3 className='mt-3 text-center fw-bold'>Wavvy</h3>
                            <p>2022.08.15 ~ 2022.08.30</p>
                            <a href="https://github.com/ggangb/wavvy" target="_blank" rel="noreferrer"><Image src={logo2} roundedCircle style={{ width: '25px' }} /></a>
                            <a href="http://wavvy.kro.kr" target="_blank" rel="noreferrer"><Image className="ms-2" src={logo3} roundedCircle style={{ width: '25px' }} /> </a>
                        </Col>

                        <Col className="ms-1 border-start" >
                            <blockquote className="blockquote p-3" style={{ backgroundColor: '#eeee', borderRadius: '10px', width: '100%', }}>
                                <p className="fw-normal">'웨이브' 클론코딩 각종 예능,드라마,영화 등을 시청할 수 있는<br />스트리밍 사이트</p>
                            </blockquote>
                            <div className=''>
                                <Image src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" />
                                <Image src="https://img.shields.io/badge/thymeleaf.js-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white" />
                                <Image src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
                                <Image src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white" />
                                <Image src="https://img.shields.io/badge/amazonrds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white" />
                            </div>
                            <div>
                                <ul className='mt-3'>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>KAKAO API</strong>,<strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>NAVER API</strong>를 이용한 소셜 로그인</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>메인페이지</strong>구현</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>게시판페이지</strong>구현</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>스트리밍페이지</strong>구현</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>카테고리 페이지</strong>구현</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>AMAZONE EC2</strong>로 서비스 배포</li>
                                    <li className='p-1'><strong className='fw-bold text-black rounded-2 p-1' style={{ backgroundColor: '#eeee', fontSize: '10px' }}>AMAZONE RDS</strong>로 데이터베이스 관리</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className='my-5'>
                        <h2 className='fw-bold' style={{ letterSpacing: '1px' }}>Education</h2>
                        <div className='mt-2 mb-5 bg-gray' style={{ height: '1px', backgroundColor: '#dee2e6' }}></div>
                        <Col className='mt-2'>
                            <h3 className=' fw-bold'>클라우드 기반의 MSA 풀스택 자바 개발자 과정</h3>
                            <sapn>2022.05.19 ~ 2022.11.30<span className='ms-4'>하이미디어 아카데미</span></sapn>
                            <ul className='mt-3'>
                                    <li className='p-1'>자바 프로그래밍 학습</li>
                                    <li className='p-1'>React중심의 프론트엔드 프로그래밍 학습</li>
                                    <li className='p-1'>REST기반의 Springboot 프로그래밍 학습</li>
                                </ul>
                            
                        </Col>
                    </Row>
                </Col>
            </Row >



        </Container >
    );
}

export default Home;
