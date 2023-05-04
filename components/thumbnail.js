import Image from 'next/image';

export default function Thumbnail({ src, alt }) {
  return (
    <div className="thumbnail">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        priority
      />
      <style jsx>{`
        .thumbnail {
          width: 200px;
          height: 200px;
          border-radius: 4px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
