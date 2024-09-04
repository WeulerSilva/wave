import { useTranslations } from 'next-intl';
import { MediaMentionsLogos } from './components/MediaMentionsLogos';
import { AboutSpan } from './components/AboutSpan';
import { BlueDiv } from './components/BlueDiv';
import { BlogDiv } from './components/BlogDiv';


export default function HomePage() {
  const t = useTranslations('HomePage');
  const h = useTranslations('header');

  return (
    <>
      <section>
        <div className='w-screen h-screen flex justify-center mb-4'>
          
          <video className="w-screen h-[94%] object-cover md:h-full"
            src="/images/onda.mp4"
            loop
            autoPlay
            muted />
  
        </div>
        <div className='w-screen h-[450px] flex justify-center'>
          <div className='w-full h-full flex flex-col-reverse bg-onda bg-cover bg-[-240px] md:flex-row md:bg-center md:w-[90%]'>
            <div className='w-[50%] h-full flex items-end justify-start'>
              <p className='font-beyonders ml-8 mb-8 text-2xl text-white font-bold uppercase md:text-3xl xl:text-4xl'>
                <span className='leading-[1.6]'>{t('image-first')}<br />{t('image-sec')}<br />{t('image-third')}</span>
              </p>
            </div>

            <div className='w-full h-full flex justify-center items-start pt-8 pl-20 pr-8 md:pl-0 md:pb-8 md:pt-8 md:pr-8 
                  md:items-start md:w-[50%] lg:items-end lg:pt-0 xl:pr-0'>
              <p className='text-md text-bluedark font-semibold text-right md:text-bluedark md:text-left  md:text-md xl:px-14'>
                <span className='font-conthrax leading-none'>{t('image-p')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='w-screen h-full flex justify-start items-center flex-col relative mt-14 mb-10 md:h-[300px] lg:h-[250px]'>
        <div className='w-screen h-[56px] bg-[linear-gradient(to_right,#36A9E1_40%,white_55%)] absolute top-0 z-10'></div>

        <div className='w-full flex justify-center items-start flex-col md:w-[90%] md:flex-row z-20 xl:space-x-96 2xl:space-x-[500px]'>
          <div className='w-full h-full flex justify-start flex-col'>
            <div className='w-full h-[56px] flex justify-between items-center'>
              <h6 className='text-[12px] font-semibold text-white pl-6 uppercase font-conthrax md:pl-0 md:text-md lg:text-xl'>
                {t('about')}
              </h6>
              <AboutSpan link='/About' style='bg-bluedark text-white mr-6 md:mr-0' />
            </div>
            <p className='mt-10 px-6 text-bluedark text-justify font-nexa md:text-[15px] md:px-0 md:mt-6'>
              {t('video-p')}
            </p>
          </div>

          <div className='w-full h-full flex justify-center mt-10 md:mt-0 md:justify-end'>
            <video className="w-full h-full object-cover border-white hover:border-[1px] md:rounded-2xl md:w-[90%] xl:w-full xl:h-[250px]"
              src="https://cdn.pixabay.com/video/2023/09/30/182970-869947284_tiny.mp4"
              controls
            />
          </div>
        </div>
      </section>

      {/*
      <section className='w-screen bg-gray-100 flex justify-center items-center flex-col md:h-[380px] lg:h-[350px]'>
        <div className='w-full pl-6 h-ful md:pl-0 md:w-[85%] xl:w-[65%]'>
          <h2 className='mt-6 mb-4 text-xl font-semibold font-conthrax text-bluedark'>
            {t('midia-h1')}
          </h2>
          <p className='font-nexa text-bluedark pr-6 text-justify md:pr-0'>
            {t('midia-p')}
          </p>
          <div className='flex flex-wrap justify-center gap-4 w-full mt-8 mb-8 pr-6 md:pr-0 md:flex md:justify-between'>
            <MediaMentionsLogos style='bg-media-link' link='https://wavepoolmag.com/new-wave-pool-tech-concept-discovered-in-south-america/' />
            <MediaMentionsLogos style='bg-stab-link' link='https://stabmag.com/features/wave-pool-game-changers/' />
            <MediaMentionsLogos style='bg-media-link' link='https://wavepoolmag.com/waveseg-partners-with-the-brazilian-surf-park-association/' />
            <MediaMentionsLogos style='bg-waves-link' link='https://www.waves.com.br/ondas-artificiais/waveseg-tecnologia-nacional-para-o-surfe/' />
            <MediaMentionsLogos style='bg-media-link' link='https://wavepoolmag.com/how-the-waveseg-wave-generation-system-works/' />
            <MediaMentionsLogos style='bg-youtube-link' link='https://www.youtube.com/watch?v=FaA_F7-L5Zs' />
            <MediaMentionsLogos style='bg-media-link' link='https://wavepoolmag.com/update-on-brazils-wave-pool-scene/' />
          </div>
        </div>
      </section>
      */}


      <div className='w-screen h-[210px] flex justify-center items-center bg-bluelight bg-mar-360 bg-cover bg-no-repeat bg-[-950px] md:bg-[-300px] xl:bg-center'>
        <div className='w-[90%] h-full md:w-[90%]'>
          <div className='w-full h-full bg-360 bg-center bg-contain bg-no-repeat md:w-[480px]'></div>
        </div>
      </div>

      <section className='w-screen bg-bluedark flex justify-center'>
        <div className='w-[90%] flex flex-col justify-center items-center py-16 lg:flex-row lg:justify-between'>
          <div className='flex justify-start items-center text-center flex-col h-full w-[80%] mb-12 md:w-[50%] lg:mb-0 lg:w-[25%]'>
            <AboutSpan link='/Technology' style='bg-bluelight text-bluedark' />
            <h6 className='font-conthrax text-[14px] text-white mt-2 lg:mt-5'>{h('Technology')}</h6>
            <p className='text-gray-400 font-nexa'>{t('more-one')}</p>
          </div>

          <div className='flex justify-start items-center flex-col text-center h-full w-[80%] mb-12 md:w-[50%] lg:mb-0 lg:w-[18%]'>
            <AboutSpan link='/Products' style='bg-bluelight text-bluedark' />
            <h6 className='font-conthrax text-[14px] text-white mt-2 lg:mt-5'>{t('products')}</h6>
            <p className='text-gray-400 font-nexa'>WS-1.64 - 64 {t('cameras')}.<br />WS-1.32 - 32 {t('cameras')}.</p>
          </div>

          <div className='flex justify-start items-center flex-col text-center h-full w-[80%] mb-12 md:w-[50%] lg:mb-0 lg:w-[25%]'>
            <AboutSpan link='/Products' style='bg-bluelight text-bluedark' />
            <h6 className='font-conthrax text-[14px] text-white mt-2 lg:mt-5'>{t('services')}</h6>
            <p className='text-gray-400 font-nexa'>{t('services-one')}<br />{t('services-two')}<br />{t('services-three')}</p>
          </div>

          <div className='flex justify-start items-center flex-col text-center h-full w-[80%] md:w-[50%] lg:w-[25%]'>
            <AboutSpan link='/Market' style='bg-bluelight text-bluedark' />
            <h6 className='font-conthrax text-[14px] text-white mt-2 lg:mt-5'>{h('Market')}</h6>
            <p className='text-gray-400 font-nexa'>{t('market')}.</p>
          </div>
        </div>

      </section>

      <section className='w-screen flex flex-col justify-center items-center'>
        <BlueDiv textSize='text-[9px] md:text-[14px]' firstText={t('r-s-c')} aboutStyle='text-[8px] px-1 py-1 mr-6 md:mr-0 md:text-[10px]' link='/Sustainability' />

        <div className='w-full h-[400px] flex justify-between items-start flex-col my-5 md:space-x-8 md:w-[90%] md:h-[240px] md:flex-row xl:space-x-16 2xl:space-x-[100px]'>
          <div className='w-full md:w-[50%]'>
            <p className='text-[15px] text-bluedark font-nexa pl-6 pr-6 text-justify mb-4 md:pl-0 md:mb-0 md:pr-0 lg:pt-5'>
              {t("r-s-p")}
            </p>
          </div>
          <div className='w-full h-full bg-tartaruga bg-cover bg-center md:w-[50%]'></div>
        </div>
      </section>

      <section className='w-screen flex flex-col justify-center items-center'>
        <BlueDiv firstText='Blog' aboutStyle='hidden' />

        <div className='w-[90%] my-4 flex justify-between items-center flex-col md:pl-0 md:flex-row'>
          <BlogDiv callText={t("blog-call")} goText={t("blog-go")} />
          <BlogDiv callText={t("blog-call")} goText={t("blog-go")} />
          <BlogDiv callText={t("blog-call")} goText={t("blog-go")} />
        </div>

        <AboutSpan link='/Blog' text={t("blog-button")} style='bg-bluedark text-white p-1 mt-4 mb-6' />
      </section>

      <section className='w-screen flex flex-col justify-center items-center relative mt-4'>
        <div className='w-full h-[56px] bg-[linear-gradient(to_right,#36A9E1_60%,white_95%)]  flex justify-center items-center'>
          <div className='w-full flex justify-start items-center md:w-[90%]'>
            <h4 className='text-[12px] font-semibold text-white pl-6 uppercase font-conthrax md:pl-0 md:text-md lg:text-xl'>{t("follow")}</h4>
            <a href="https://www.instagram.com/waveseg.oficial/" target='_blank'>
              <AboutSpan link='' style={`bg-bluedark text-white ml-6`} text='Waveseg.oficial' />
            </a>

          </div>
        </div>

        <div className='w-[95%] h-[360px] space-x-1 flex justify-center items-center flex-col my-4 md:w-[90%] md:flex-row'>
          <div className='w-full h-full bg-soon-1 bg-cover bg-no-repeat bg-center'></div>
          <div className='w-full h-full bg-soon-2 bg-cover bg-no-repeat bg-center'></div>
          <div className='w-full h-full bg-soon-3 bg-cover bg-no-repeat bg-center flex justify-center items-center'>
            {/*<span className='text-white font-conthrax text-2xl uppercase'>{t("soon-first")}<br />{t("soon-two")}</span>*/}</div>
        </div>

        <div className='bg-[#CDCCCC] w-screen flex justify-center items-center flex-col mb-1'>
          <div className='w-full flex justify-center items-center flex-col md:w-[90%]'>
            <h3 className='uppercase text-lg font-conthrax text-center text-bluedark mt-6 xl:text-[25px]'>
              {t("form-one")}
            </h3>
            <h5 className='uppercase text-sm text-center font-conthrax mt-2 text-bluelight lg:text-[15px] xl:text-[18px]'>
              {t("form-two")}
            </h5>
            <AboutSpan link='/Contact' text={t("form-go")} style='bg-bluedark text-white my-6' />
          </div>
        </div>
      </section>

    </>
  );
}