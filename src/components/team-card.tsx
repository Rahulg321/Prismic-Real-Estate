import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { TeammemberDocument } from "../../prismicio-types";

export function TeamCard({ member }: { member: TeammemberDocument }) {
  return (
    <article className="group">
      <Link href={`/team/${member.uid}`}>
        <div className="flex flex-col items-center">
          <div className="w-full aspect-square relative mb-4 max-w-xs mx-auto overflow-hidden">
            <PrismicNextImage
              field={member.data.headshot}
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300 w-full h-full"
              imgixParams={{ fit: "crop" }}
            />
          </div>
          <h3 className="text-xl font-medium text-center group-hover:text-amber-600 transition-colors">
            {member.data.first_name} {member.data.last_name}
          </h3>
          <p className="text-amber-600 text-center">{member.data.designation}</p>
        </div>
      </Link>
    </article>
  );
}
