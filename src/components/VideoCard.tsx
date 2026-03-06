interface VideoCardProps {
  label: string;
  caption: string;
  videoId?: string;
  type?: "youtube" | "loom";
}

const VideoCard = ({ label, caption, videoId, type = "youtube" }: VideoCardProps) => {
  const embedUrl = type === "youtube"
    ? `https://www.youtube.com/embed/${videoId}`
    : `https://www.loom.com/embed/${videoId}`;

  return (
    <div className="space-y-3">
      <span className="overline text-foreground/[0.35]">{label}</span>
      <div className="card-surface overflow-hidden">
        <div className="relative w-full aspect-video bg-background">
          {videoId ? (
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={label}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-foreground/[0.35] flex items-center justify-center">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-foreground/[0.5] border-b-[10px] border-b-transparent ml-1" />
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="body-small text-foreground/[0.35]">{caption}</p>
    </div>
  );
};

export default VideoCard;
