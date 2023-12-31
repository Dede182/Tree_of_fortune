import { State } from '@/store/types';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import ten from '../../images/symbols/wild-bandito_s_scatter.png'

const SoundSvg = () => {
  const isSoundOn = useSelector((state: State) => state.settings.isSoundOn);

  return (
    <img src={ten} className={`${styles.icon}`} width="50px" height="50" alt="" />

    // <svg
    //   aria-hidden={true}
    //   width="50"
    //   height="50"
    //   fill="none"
    //   viewBox="0 0 480 480"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={`${styles.icon}`}
    // >
    //   <g clipPath="url(#a)">
    //     <path d="m278.94 17.577c-5.568-2.656-12.128-1.952-16.928 1.92l-155.65 124.51h-74.368c-17.632 0-32 14.368-32 32v128c0 17.664 14.368 32 32 32h74.368l155.62 124.51c2.912 2.304 6.464 3.488 10.016 3.488 2.368 0 4.736-0.544 6.944-1.6 5.536-2.656 9.056-8.256 9.056-14.4v-416c0-6.144-3.52-11.744-9.056-14.432z" />
    //     <path
    //       className={` ${!isSoundOn ? `${styles['icon__wave--off']}` : ''}`}
    //       d="m368.99 126.86c-6.304-6.208-16.416-6.112-22.624 0.128-6.208 6.304-6.144 16.416 0.128 22.656 24.192 23.872 37.504 55.968 37.504 90.368s-13.312 66.496-37.504 90.368c-6.272 6.176-6.336 16.32-0.128 22.624 3.136 3.168 7.264 4.736 11.36 4.736 4.064 0 8.128-1.536 11.264-4.64 30.336-29.856 47.008-70.048 47.008-113.09s-16.672-83.232-47.008-113.15z"
    //     />
    //     <path
    //       className={` ${!isSoundOn ? `${styles['icon__wave--off']}` : ''}`}
    //       d="m414.14 81.769c-6.304-6.24-16.416-6.176-22.656 0.096-6.208 6.272-6.144 16.416 0.096 22.624 36.384 36.064 56.416 84.192 56.416 135.52s-20.032 99.424-56.416 135.49c-6.24 6.24-6.304 16.384-0.096 22.656 3.168 3.136 7.264 4.704 11.36 4.704 4.064 0 8.16-1.536 11.296-4.64 42.496-42.08 65.856-98.272 65.856-158.21s-23.36-116.13-65.856-158.24z"
    //     />
    //     <rect
    //       transform="rotate(45 28.284 25.845)"
    //       x="28.284"
    //       y="25.845"
    //       width="601.76"
    //       height="60"
    //       rx="17"
    //       className={` ${isSoundOn ? `${styles['icon__line--off']}` : ''}`}
    //     />
    //   </g>
    // </svg>
  );
};

export { SoundSvg };
