# Basic React Routing

Build a very small minimal website with 4 pages.
  1. Homepage -> /

    <HomePage /> ✅

  2. About Page -> /about
   
    <AboutPage /> ✅ 

  3. Contact Page -> /contact

    <ContactPage /> ✅ 

  4. Privacy & Policy Page -> /privacy-policy
   
    <PrivacyPolicyPage /> ✅ 

Header ✅

    The header will have the links to navigate inside our website
      Link -> /
      Link -> /about
      Link -> /contact
      Link -> /privacy-policy

Footer ✅

    Some description & copyright information
    Some additional links

  5. Dynamic Route Logic -> /blog/:dynamicId
     
     - Extract the dynamic part from the URL using `const {dynamicID} = useParams()` and `dynamicId` in this case is the dynamic part
     - Display the data depending on the dynamic value i.e `dynamicId`
  
        - Extracting the data based on the dynamic value i.e `dynamicId`
        - Rendering the data to the markup/jsx
   
    <BlogPage /> ✅
    <BlogDetailPage /> ✅

  6. __Code-Splitting with React.lazy()__

  ```js
    import { lazy, Suspense } from 'react';

    const OtherComponent = lazy(() => import('./OtherComponent'));

    function MyComponent() {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
          </Suspense>
        </div>
      );
    }
  ```

  7. Protected/Authenticated Route implementation, i.e. login page -> /login
   
    <LoginPage />
    <MusicPage />
    <AuthChecker />