import Image from "next/image";
import main from "./css/main.module.css";
import { useRouter } from "next/router";

export default function Thumbnail({ src, alt }) {
  const router = useRouter();
  return (
    <div className="thumbnail">
      <Image
        src={`${router.basePath}${src}`}
        alt={alt}
        width={640}
        height={1000}
        sizes="100vw"
        priority
        className={main['posts-item__thumbnail-img']}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
