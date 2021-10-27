import Image from 'next/image';

interface ImgProps {
  src: string;
  divClass?: string;
  imgClass?: string;
  alt?: string;
}

const Img = ({ src, divClass, imgClass, alt }: ImgProps) => {
  return (
    <div className={`relative ${divClass}`}>
      <Image src={src} layout="fill" className={`object-cover rounded-lg ${imgClass}`} alt={alt} />
    </div>
  );
};
export default Img;
