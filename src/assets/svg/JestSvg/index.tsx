import styles from './styles.module.scss';
import guitar from '../../images/symbols/wild-bandito_h_guitar.png'
interface SymbolSvgProps {
  animate?: boolean;
}

const JestSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  return (
    // <svg
    //   aria-hidden={true}
    //   width="50"
    //   height="50"
    //   className={animate ? styles.icon : ''}
    //   viewBox="0 0 256 283"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g>
    //     <path
    //       d="m239.97 139.2c0-14.534-11.782-26.316-26.316-26.316-0.935 0-1.857 0.05-2.766 0.145l36.145-106.6h-153.6l36.094 106.51c-0.529-0.032-1.061-0.053-1.599-0.053-14.534 0-26.316 11.782-26.316 26.316 0 11.748 7.699 21.694 18.326 25.078-5.613 9.722-12.675 18.478-20.693 26.042-10.903 10.286-23.381 18.085-36.876 22.891-16.068-8.254-23.656-26.612-16.809-42.707 0.773-1.817 1.562-3.66 2.317-5.494 11.64-2.717 20.314-13.153 20.314-25.621 0-14.534-11.782-26.316-26.316-26.316-14.535 0-26.317 11.782-26.317 26.316 0 8.913 4.435 16.784 11.213 21.545-6.514 14.831-16.088 30.351-19.071 48.339-3.575 21.559-0.011 44.443 18.634 57.366 43.424 30.096 90.56-18.657 140.26-30.913 18.011-4.442 37.782-3.726 53.651-12.917 11.917-6.902 19.773-18.34 22.003-31.182 2.202-12.686-1.009-25.317-8.393-35.559 3.819-4.568 6.12-10.448 6.12-16.868zm-85.732 0.093c0-0.031 3e-3 -0.062 3e-3 -0.093 0-9.544-5.082-17.902-12.686-22.515l28.728-58.091 28.778 58.707c-7.067 4.718-11.724 12.764-11.724 21.899 0 0.192 0.011 0.381 0.015 0.572l-33.114-0.479z"
    //       fill="#C63D14"
    //     />
    //     <path
    //       d="m246.4 139.2c0-15.985-11.517-29.323-26.688-32.172l36.289-107.03h-171.53l36.344 107.25c-14.643 3.259-25.627 16.345-25.627 31.955 0 11.723 6.195 22.02 15.48 27.806-4.466 6.653-9.762 12.914-15.831 18.639-9.624 9.08-20.347 15.966-31.907 20.496-11.643-7.314-16.565-21.106-11.453-33.122l0.4-0.94c0.25-0.588 0.501-1.178 0.751-1.768 12.788-4.459 21.993-16.632 21.993-30.922 0-18.055-14.689-32.743-32.744-32.743s-32.743 14.688-32.743 32.743c0 9.113 3.745 17.365 9.773 23.307-1.093 2.33-2.242 4.698-3.423 7.124-5.512 11.321-11.759 24.153-14.122 38.402-4.693 28.299 2.876 50.921 21.313 63.699 11.188 7.754 22.549 10.804 33.982 10.803 21.529-1e-3 43.306-10.816 64.606-21.396 15.341-7.619 31.203-15.498 46.872-19.362 5.83-1.438 11.829-2.303 18.18-3.219 12.594-1.817 25.618-3.695 37.154-10.376 13.371-7.745 22.525-20.737 25.113-35.644 2.222-12.797-0.453-25.613-6.975-36.483 3.041-4.968 4.797-10.804 4.797-17.044zm-12.854 0c0 10.967-8.922 19.89-19.89 19.89-10.966 0-19.889-8.923-19.889-19.89s8.923-19.889 19.889-19.889c10.968 0 19.89 8.922 19.89 19.889zm4.524-126.35-32.045 94.513c-1.389 0.333-2.743 0.753-4.058 1.258l-31.656-64.578-31.748 64.196c-1.372-0.473-2.784-0.862-4.232-1.15l-31.935-94.239h135.67zm-110.14 106.46c10.967 0 19.889 8.922 19.889 19.889s-8.922 19.89-19.889 19.89c-10.966 0-19.889-8.923-19.889-19.89s8.923-19.889 19.889-19.889zm-86.054 0.189c10.968 0 19.89 8.922 19.89 19.889s-8.922 19.89-19.89 19.89c-10.966 0-19.889-8.923-19.889-19.89s8.923-19.889 19.889-19.889zm194.04 71.028c-1.935 11.148-8.821 20.887-18.891 26.719-9.387 5.437-20.636 7.06-32.546 8.777-6.38 0.92-12.978 1.872-19.423 3.462-17.042 4.202-33.549 12.401-49.512 20.33-31.945 15.867-59.534 29.569-85.547 11.54-19.055-13.206-18.175-37.641-15.955-51.031 2.057-12.405 7.619-23.83 12.998-34.879 0.931-1.912 1.835-3.785 2.722-5.646 2.668 1.067 5.505 1.794 8.462 2.124-5.475 18.071 3.136 37.719 21.209 47.004l2.473 1.271 2.62-0.933c14.288-5.088 27.453-13.254 39.131-24.271 7.549-7.121 14.036-15 19.37-23.419 1.6 0.241 3.237 0.368 4.903 0.368 18.055 0 32.744-14.688 32.744-32.744 0-9.71-4.253-18.442-10.989-24.444l20.578-41.612 20.787 42.405c-6.237 5.966-10.134 14.359-10.134 23.651 0 18.056 14.688 32.744 32.743 32.744 6.937 0 13.372-2.174 18.672-5.868 3.68 7.533 5.051 16.009 3.585 24.452z"
    //       fill="#fff"
    //     />
    //   </g>
    // </svg>
    <img src={guitar} className={animate ? styles.icon : ''} width="70px" height="70" alt="" />
  );
};

export { JestSvg };
