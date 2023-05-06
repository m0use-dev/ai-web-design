import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Thumbnail({ src, alt }) {
  const router = useRouter();
  return (
    <div className="thumbnail">
      <Image
        src={`${router.basePath}${src}`}
        alt={alt}
        width={640}
        height={640}
        sizes="100vw"
        priority
        style={{
          width: '100%',
          height: 'auto',
        }}
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
