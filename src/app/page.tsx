import NextSvg from 'shared/assets/icons/next.svg';
import colors from 'shared/styles/colors.module.scss';
import { Link } from 'shared/ui/navigation/Link';

export default async function Home() {
    return (
        <main>
            <div>
                <p style={{ color: colors.primary500 }}>
                    Get started by editing&nbsp;
                    <code>src/app/page.tsx</code>
                </p>
            </div>

            <div>
                <NextSvg width={180} height={37} />
            </div>

            <div>
                <Link
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    variant="secondary"
                    linkVariant="external"
                >
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </Link>

                <Link
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    variant="secondary"
                    linkVariant="external"
                >
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                </Link>

                <Link
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    variant="secondary"
                    linkVariant="external"
                >
                    <h2>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p>Explore the Next.js playground.</p>
                </Link>

                <Link
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    variant="secondary"
                    linkVariant="external"
                >
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
                </Link>
            </div>
        </main>
    );
}
