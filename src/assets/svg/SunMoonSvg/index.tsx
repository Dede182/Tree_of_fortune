import { State } from '@/store/types';
import { Theme } from '@/types';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import ten from '../../symbols/GaneshaGold_Ganesha.png'

const SunMoonSvg = () => {
  const isDarkTheme = useSelector((state: State) => state.settings.currentTheme) === Theme.DARK;

  return (
    <img src={ten} className={`${styles['icon__sun']} ${isDarkTheme ? `${styles['icon__sun--dark']}` : ''}`} width="50px" height="50" alt="" />

    // <svg
    //   enableBackground="new 0 0 45.16 45.16"
    //   version="1.1"
    //   viewBox="0 0 45.16 45.16"
    //   aria-hidden={true}
    //   width="50"
    //   height="50"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g className={`${styles['icon__sun']} ${isDarkTheme ? `${styles['icon__sun--dark']}` : ''}`}>
    //     <circle cx="23" cy="23" r="12" />
    //     <path d="m22.58 7.944c-1.219 0-2.207-0.988-2.207-2.206v-3.531c0-1.219 0.988-2.207 2.207-2.207s2.207 0.988 2.207 2.207v3.531c0 1.218-0.989 2.206-2.207 2.206z" />

    //     <path d="m22.58 37.215c-1.219 0-2.207 0.988-2.207 2.207v3.53c0 1.22 0.988 2.208 2.207 2.208s2.207-0.988 2.207-2.208v-3.53c0-1.219-0.989-2.207-2.207-2.207z" />

    //     <path d="m32.928 12.231c-0.861-0.862-0.861-2.259 0-3.121l2.497-2.497c0.861-0.861 2.259-0.861 3.121 0 0.862 0.862 0.862 2.26 0 3.121l-2.497 2.497c-0.861 0.862-2.258 0.862-3.121 0z" />

    //     <path d="m12.231 32.93c-0.862-0.863-2.259-0.863-3.121 0l-2.497 2.496c-0.861 0.861-0.862 2.26 0 3.121s2.26 0.861 3.121 0l2.497-2.498c0.862-0.861 0.862-2.259 0-3.119z" />

    //     <path d="m37.215 22.58c0-1.219 0.988-2.207 2.207-2.207h3.531c1.219 0 2.207 0.988 2.207 2.207s-0.988 2.206-2.207 2.206h-3.531c-1.219 0-2.207-0.987-2.207-2.206z" />

    //     <path d="m7.944 22.58c0-1.219-0.988-2.207-2.207-2.207h-3.53c-1.219 0-2.207 0.988-2.207 2.207s0.988 2.206 2.207 2.206h3.531c1.218 0 2.206-0.987 2.206-2.206z" />

    //     <path d="m32.928 32.93c0.862-0.861 2.26-0.861 3.121 0l2.497 2.497c0.862 0.86 0.862 2.259 0 3.12s-2.259 0.861-3.121 0l-2.497-2.497c-0.862-0.862-0.862-2.259 0-3.12z" />

    //     <path d="m12.231 12.231c0.862-0.862 0.862-2.259 0-3.121l-2.497-2.496c-0.862-0.862-2.259-0.862-3.121 0-0.862 0.861-0.862 2.259 0 3.12l2.497 2.497c0.862 0.863 2.259 0.863 3.121 0z" />
    //   </g>
    //   <path
    //     className={`${styles['icon__moon']} ${isDarkTheme ? `${styles['icon__moon--dark']}` : ''}`}
    //     d="m29.693 14.49c-0.469-0.174-1-0.035-1.32 0.353-1.795 2.189-4.443 3.446-7.27 3.446-5.183 0-9.396-4.216-9.396-9.397 0-2.608 1.051-5.036 2.963-6.835 0.366-0.347 0.471-0.885 0.264-1.343-0.207-0.456-0.682-0.736-1.184-0.684-7.84 0.761-13.75 7.281-13.75 15.164 0 8.402 6.836 15.238 15.238 15.238 8.303 0 14.989-6.506 15.219-14.812 0.014-0.502-0.293-0.956-0.764-1.13z"
    //   />
    // </svg>
  );
};

export { SunMoonSvg };
