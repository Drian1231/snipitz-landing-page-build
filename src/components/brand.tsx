import iconAsset from "@/assets/Snipitz_Icon.png.asset.json";
import lockupAsset from "@/assets/Snipitz_Lockup_ForDarkBackgrounds.png.asset.json";

export function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <img
      src={lockupAsset.url}
      alt="Snipitz"
      width={1212}
      height={360}
      loading="eager"
      decoding="async"
      className={`h-8 w-auto ${className}`}
    />
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={iconAsset.url}
      alt=""
      aria-hidden="true"
      width={201}
      height={201}
      loading="lazy"
      decoding="async"
      className={`h-9 w-9 rounded-[10px] ${className}`}
    />
  );
}
