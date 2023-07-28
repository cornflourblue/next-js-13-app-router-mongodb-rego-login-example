import 'bootstrap/dist/css/bootstrap.min.css';
import 'globals.css';

export const metadata = {
    title: 'Next.js 13 - User Registration and Login Example'
}

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}

                {/* credits */}
                <div className="text-center mt-4">
                    <p>
                        <a href="https://jasonwatmore.com/next-js-13-app-router-mongodb-user-rego-and-login-tutorial-with-example" target="_blank">Next.js 13 + App Router + MongoDB - User Rego and Login Tutorial with Example</a>
                    </p>
                    <p>
                        <a href="https://jasonwatmore.com" target="_blank">JasonWatmore.com</a>
                    </p>
                </div>
            </body>
        </html>
    );
}
