import Image from 'next/image';

export default function Thumbnail({ src, alt }) {
  return (
    <div className="thumbnail">
      <Image
        src={src}
        alt={alt}
        width={640}
        height={640}
        priority
      />
      <style jsx>{`
        .thumbnail {
          width: 640px;
          height: auto;
          border-radius: 4px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
