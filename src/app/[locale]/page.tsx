import { useTranslations } from 'next-intl';
import { MediaMentionsLogos } from './components/MediaMentionsLogos';
import { AboutSpan } from './components/AboutSpan';
import { BlueDiv } from './components/BlueDiv';
import Image from 'next/image';
import { BlogDiv } from './components/BlogDiv';


export default function HomePage() {
  const t = useTranslations('HomePage');
  const h = useTranslations('header');

  return (
    <>
      <section>
        <div className='w-screen h-[450px] flex justify-center mb-4'>
          <video className="w-[90%] h-full object-cover border-white hover:border-[1px] xl:w-[70%]"
            src="https://cdn.pixabay.com/video/2023/09/30/182970-869947284_tiny.mp4"
            loop
            autoPlay
            muted />
        </div>
        <div className='w-screen h-[450px] flex justify-center'>
          <div className='w-[90%] h-full flex xl:w-[70%] bg-onda bg-cover bg-center'>
            <div className='w-[50%] h-full flex items-end justify-start'>
              <p className='font-beyonders ml-8 mb-8 text-2xl text-white font-bold uppercase md:text-3xl xl:text-4xl'>
                <span className='leading-[1.6]'>{t('image-first')}<br />{t('image-sec')}<br />{t('image-third')}</span>
              </p>
            </div>

            <div className='w-[50%] h-full flex justify-center items-center'>
              <p className='text-sm text-bluedark font-semibold text-left  md:text-xl lg:text-2xl xl:px-20'>
                <span className='font-conthrax leading-none'>{t('image-p')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='w-screen h-full flex justify-start items-center flex-col relative mt-14 mb-10 md:h-[300px] lg:h-[250px]'>
        <div className='w-screen h-[56px] bg-[linear-gradient(to_right,#36A9E1_40%,white_55%)] absolute top-0 z-10'></div>

        <div className='w-[85%] flex justify-center items-start flex-col md:flex-row z-20 xl:w-[65%]'>
          <div className='w-full h-full flex justify-start flex-col'>
            <div className='w-full h-[56px] flex justify-between items-center'>
              <h6 className='text-2xl font-semibold text-white pl-6 uppercase font-conthrax'>
                {t('about')}
              </h6>
              <AboutSpan style='bg-bluedark mr-6 text-white' />
            </div>
            <p className='mt-10 px-6 text-bluedark text-justify font-nexa md:mt-6'>
              {t('video-p')}
            </p>
          </div>

          <div className='w-full h-full flex justify-center mt-10 md:mt-0 md:justify-end'>
            <video className="w-[90%] h-full rounded-2xl object-cover border-white hover:border-[1px]"
              src="https://cdn.pixabay.com/video/2023/09/30/182970-869947284_tiny.mp4"
              controls
            />
          </div>
        </div>
      </section>

      <section className='w-screen bg-gray-100 flex justify-center items-center flex-col md:h-[350px]'>
        <div className='w-[85%] pl-6 h-full xl:w-[65%]'>
          <h2 className='mt-6 mb-4 text-2xl font-semibold font-conthrax text-bluedark'>
            {t('midia-h1')}
          </h2>
          <p className='font-nexa text-bluedark'>
            {t('midia-p')}
          </p>
          <div className='flex flex-wrap justify-center gap-4 w-full mt-8 mb-8 pr-6 md:pr-0 md:flex md:justify-between'>
            <MediaMentionsLogos />
            <MediaMentionsLogos />
            <MediaMentionsLogos />
            <MediaMentionsLogos />
            <MediaMentionsLogos />
            <MediaMentionsLogos />
            <MediaMentionsLogos />
          </div>
        </div>
      </section>

      <div className='w-screen h-[210px] bg-bluelight bg-mar-360 bg-cover bg-no-repeat bg-[-950px] md:bg-[-300px] xl:bg-center'></div>

      <section className='w-screen bg-bluedark flex justify-center'>
        <div className='grid grid-cols-2 w-[95%] py-16 justify-items-center lg:flex lg:justify-between lg:items-center'>
          <div className='flex justify-start items-center text-center flex-col h-full w-[50%] mb-16 lg:mb-0 lg:w-[25%]'>
            <AboutSpan style='bg-bluelight text-bluedark' />
            <h6 className='font-conthrax text-[14px] text-white mt-5'>{h('Technology')}</h6>
            <p className='text-gray-400 font-nexa'>{t('more-one')}</p>
          </div>

          <div className='flex justify-start items-center flex-col text-center h-full w-[50%] lg:w-[18%]'>
            <AboutSpan style='bg-bluelight text-bluedark' />
            <h6 className='font-conthrax text-[14px] text-white mt-5'>{t('products')}</h6>
            <p className='text-gray-400 font-nexa'>WS-1.64 - 64 {t('cameras')}<br />WS-1.32 - 32 {t('cameras')}</p>
          </div>

          <div className='flex justify-start items-center flex-col text-center h-full w-[50%] lg:w-[25%]'>
            <AboutSpan style='bg-bluelight text-bluedark' />
            <h6 className='font-conthrax text-[14px] text-white mt-5'>{t('services')}</h6>
            <p className='text-gray-400 font-nexa'>{t('services-one')}<br />{t('services-two')}<br />{t('services-three')}</p>
          </div>

          <div className='flex justify-start items-center flex-col text-center h-full w-[50%] lg:w-[25%]'>
            <AboutSpan style='bg-bluelight text-bluedark' />
            <h6 className='font-conthrax text-[14px] text-white mt-5'>{h('Market')}</h6>
            <p className='text-gray-400 font-nexa'>{t('market')}</p>
          </div>
        </div>

      </section>

      <section className='w-screen flex flex-col justify-center items-center'>
        <BlueDiv firstText={t('r-s-c')} />

        <div className='w-[85%] h-[400px] flex justify-between items-center flex-col space-x-8 my-5 md:h-[240px] md:flex-row xl:w-[65%]'>
          <div className='w-full md:w-[50%]'>
            <p className='text-[15px] text-bluedark font-nexa pl-6 text-justify mb-4 md:mb-0'>
              {t("r-s-p")}
            </p>
          </div>
          <div className='w-full h-full bg-tartaruga bg-cover bg-center md:w-[50%]'></div>
        </div>
      </section>

      <section className='w-screen flex flex-col justify-center items-center'>
        <BlueDiv firstText='Blog' aboutStyle='hidden' />

        <div className='w-[85%] pl-6 my-4 flex justify-between items-center flex-col md:flex-row xl:w-[65%]'>
          <BlogDiv callText={t("blog-call")} goText={t("blog-go")} />
          <BlogDiv callText={t("blog-call")} goText={t("blog-go")} />
          <BlogDiv callText={t("blog-call")} goText={t("blog-go")} />
        </div>

        <AboutSpan text={t("blog-button")} style='bg-bluedark text-white p-1 mt-4 mb-6' />
      </section>

      <section className='w-screen flex flex-col justify-center items-center relative mt-4'>
        <div className='w-full h-[56px] bg-[linear-gradient(to_right,#36A9E1_60%,white_95%)]  flex justify-center items-center'>
          <div className='w-[85%] flex justify-start items-center xl:w-[65%]'>
            <h4 className='text-[12px] font-semibold text-white pl-6 uppercase font-conthrax md:text-md lg:text-xl'>{t("follow")}</h4>
            <AboutSpan style={`bg-bluedark text-white ml-6`} text='@wave.seg' />
          </div>
        </div>

        <div className='w-[95%] h-[360px] xl:w-[65%] space-x-1 flex justify-center items-center flex-col md:flex-row my-4'>
          <div className='w-full h-full bg-soon-1 bg-cover bg-no-repeat bg-center'></div>
          <div className='w-full h-full bg-soon-2 bg-cover bg-no-repeat bg-center'></div>
          <div className='w-full h-full bg-soon-3 bg-cover bg-no-repeat bg-center flex justify-center items-center'>
            <span className='text-white font-conthrax text-2xl uppercase'>{t("soon-first")}<br />{t("soon-two")}</span></div>
        </div>

        <div className='bg-[#CDCCCC] w-screen flex justify-center items-center flex-col mb-1'>
          <div className='w-[85%] xl:w-[65%] flex justify-center items-center flex-col'>
            <h3 className='uppercase text-lg font-conthrax text-center text-bluedark mt-6 xl:text-[25px]'>
              {t("form-one")}
            </h3>
            <h5 className='uppercase text-sm text-center font-conthrax mt-2 text-bluelight lg:text-[15px] xl:text-[17px]'>
              {t("form-two")}
            </h5>
            <AboutSpan text={t("form-go")} style='bg-bluedark text-white my-6' />
          </div>
        </div>
      </section>

    </>
  );
}