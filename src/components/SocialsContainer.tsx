import { socialIcons } from '../other/socialIconList';
import SocialIcon from './SocialIcon';
import '../styles/Socials.scss';

const SocialsContainer = () => {
  return (
    <div className="socials-wrapper">
      {socialIcons?.map((socItem) => (
        <SocialIcon key={socItem} socItem={socItem} />
      ))}
    </div>
  );
};

export default SocialsContainer;
