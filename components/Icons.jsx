export function MoonIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''}`}>
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function SunIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''}`}>
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  );
}

export function EllipsisHorizontalIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''} w-6 h-6 `}>
      <path
        fillRule="evenodd"
        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function XMarkIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''} w-6 h-6 `}>
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function LinkedinIcon({className}) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={`h-6 w-6 ${className ?? ''}`}>
      <path
        fill="currentColor"
        d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
      />
    </svg>
  );
}

export function FacebookIcon({className}) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-6 w-6 ${className ?? ''}`}>
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function InstagramIcon({className}) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-6 w-6 ${className ?? ''}`}>
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function GithubIcon({className}) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-6 w-6 ${className ?? ''}`}>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function LeetcodeIcon({className}) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${className ?? ''}`}>
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
    </svg>
  );
}

export function CodeforcesIcon({className}) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${className ?? ''}`}>
      <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z" />
    </svg>
  );
}

export function GlobeIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-6 w-6 ${className ?? ''}`}>
      <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CloudIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-6 w-6 ${className ?? ''}`}>
      <path
        fillRule="evenodd"
        d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function BrainIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="currentColor"
      className={`h-6 w-6 ${className ?? ''}`}>
      <path d="M15.8,19.3c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1c0.4,0,0.8-0.3,0.9-0.6c0.1-0.1,0.1-0.2,0.1-0.3c0-0.2-0.1-0.5-0.2-0.6   C16.4,19.4,16.1,19.3,15.8,19.3z" />
      <path d="M18.9,14.7c-0.5,0-1,0.4-1,1c0,0.5,0.4,0.9,0.8,0.9c0,0,0.1,0,0.1,0c0.3,0,0.6-0.1,0.7-0.4c0.1-0.1,0.2-0.4,0.2-0.6   C19.8,15.1,19.4,14.7,18.9,14.7z" />
      <path d="M19.9,25.1c-0.5,0-1,0.4-1,1c0,0.4,0.2,0.7,0.6,0.9c0.1,0,0.3,0.1,0.4,0.1c0.2,0,0.4-0.1,0.6-0.2c0.2-0.2,0.4-0.4,0.4-0.8   C20.8,25.6,20.4,25.1,19.9,25.1z" />
      <path d="M26.3,13.8c0-0.5-0.4-1-1-1s-0.9,0.4-0.9,1c0,0.5,0.4,1,0.9,1S26.3,14.3,26.3,13.8z" />
      <path d="M31.1,19.5c0-0.5-0.4-1-1-1c-0.5,0-1,0.4-1,1c0,0.3,0.2,0.6,0.4,0.8c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3,0,0.4-0.1   C30.9,20.2,31.1,19.8,31.1,19.5z" />
      <path d="M31.7,35.1c0.5,0,1-0.4,1-1s-0.4-1-1-1c-0.1,0-0.1,0-0.2,0h0c-0.3,0.1-0.6,0.3-0.7,0.6v0c0,0.1,0,0.2,0,0.3   C30.8,34.7,31.2,35.1,31.7,35.1z" />
      <path d="M33.1,30.1L33.1,30.1c0.1,0.1,0.3,0.1,0.4,0.1c0.5,0,1-0.4,1-1c0-0.5-0.4-1-1-1c-0.5,0-0.9,0.4-0.9,1v0   C32.6,29.7,32.8,30,33.1,30.1z" />
      <path d="M35,22.9c-0.4,0-0.7,0.2-0.8,0.5c-0.1,0.1-0.1,0.3-0.1,0.5c0,0.2,0.1,0.3,0.1,0.5c0.2,0.3,0.5,0.5,0.8,0.5   c0.5,0,0.9-0.4,0.9-1C35.9,23.3,35.5,22.9,35,22.9z" />
      <path d="M45.9,18.7c-0.1-2.2-1.4-4.1-3.2-5.1c0.3-3.1-2-6.7-5.8-7.4c-1.7-5-7.8-6.8-11.8-3.6c-4.1-3.3-10.2-1.4-11.8,3.6   C9.4,7,6.9,10.7,7.4,14.3c-1.2,0.9-2,2.3-2.3,3.8c-5.1,2.7-5.6,9.8-1,13.2c0.1,2.2,1.4,4.1,3.2,5.1c-0.3,3.1,2,6.7,5.8,7.4   c1.6,4.9,7.7,6.9,11.9,3.6c4.1,3.3,10.3,1.4,11.9-3.6c3.4-0.7,6.2-3.9,5.7-7.9c1.2-0.9,2-2.3,2.3-3.8c2.5-1.3,4.1-4,4.1-6.9   C49,22.5,47.8,20.2,45.9,18.7z M43.8,31.1c-0.1,1.7-1.1,3.2-2.5,4.1c0.9,3.7-1.8,7.2-5.4,7.4c-1,5-7.4,6.9-10.9,3   c-3.6,3.9-9.9,2-11-3c-3.5-0.3-6.1-3.5-5.5-7c-1.9-0.7-3.3-2.6-3.3-4.8v-0.2c-4.6-2.9-4-9.8,1-11.8c0.1-1.7,1-3.2,2.4-4.1   c-0.9-3.7,1.7-7.2,5.4-7.4c1-5,7.4-6.9,10.9-3c3.5-3.8,9.9-2,10.9,3c3.2,0.2,6,3.1,5.5,7c1.9,0.7,3.3,2.6,3.3,4.8v0.2   c1.9,1.2,3.1,3.3,3.1,5.6C47.9,27.8,46.2,30.1,43.8,31.1z" />
      <path d="M42.7,20.8c-0.7-0.2-0.2-1-0.2-1.7c0-1.6-1.3-2.9-2.9-2.9c-0.2,0-0.3,0-0.5,0c-0.2,0-0.5-0.1-0.6-0.2   c-0.1-0.2-0.1-0.5,0-0.6c1.9-2.6-0.5-6.7-4.1-5.7c-0.2,0.1-0.4,0-0.5-0.1c-0.3-0.3-0.2-0.5-0.2-1c0-2.3-1.9-4.1-4.1-4.1   s-4.1,1.9-4.1,4.1c0,0.3-0.2,0.6-0.6,0.6c-0.3,0-0.6-0.2-0.6-0.6c0-2.3-1.9-4.1-4.1-4.1s-4.1,1.9-4.1,4.1c0,0.2,0,0.3,0,0.5   c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.1c-0.3-0.1-0.7-0.1-1-0.1c-3.1,0-4.8,3.5-3.1,5.8c0.1,0.2,0.1,0.4,0.1,0.6   c-0.1,0.2-0.3,0.3-0.5,0.3c-1.5,0.2-2.5,1.4-2.5,2.8c0,0.7,0.3,0.9,0.1,1.2c-0.1,0.1-0.2,0.2-0.4,0.3c-4.6,0.7-5,7-0.8,8.5   c0.7,0.2,0.2,1,0.2,1.7c0,1.7,1.5,3.1,3.3,2.8c0.5-0.1,0.9,0.5,0.6,0.9c-1.9,2.6,0.5,6.7,4.1,5.7c0.2,0,0.4,0,0.5,0.1   c0.3,0.3,0.2,0.6,0.2,1c0,2.3,1.9,4.1,4.1,4.1c2.2,0,4.1-1.8,4.1-4c0-0.3,0.3-0.6,0.6-0.6c0.3,0,0.6,0.2,0.6,0.6c0,2.2,1.9,4,4.1,4   c2.5,0,4.4-2.2,4.1-4.4c0-0.1-0.1-0.4,0.2-0.7c0.4-0.3,0.5,0,1.5,0c3,0,4.8-3.3,3.1-5.8c-0.1-0.2-0.1-0.4,0-0.6   c0.1-0.2,0.2-0.3,0.4-0.3c1.5-0.2,2.5-1.4,2.5-2.8c0-0.5-0.4-1.4,0.3-1.5C46.4,28.7,46.9,22.3,42.7,20.8z M35,25.7   c-0.9,0-1.6-0.6-1.8-1.4H30l-4.2,4.2v2.8h3.6l2.3-1.5c-0.1-0.2-0.1-0.4-0.1-0.6c0-1.1,0.8-1.9,1.9-1.9s1.9,0.8,1.9,1.9   c0,1-0.9,1.9-1.9,1.9c-0.5,0-0.9-0.2-1.3-0.5l-1.9,1.2l0.5,0.6c0.3-0.1,0.6-0.2,0.9-0.2c1.1,0,1.9,0.9,1.9,1.9   c0,1.1-0.9,1.9-1.9,1.9c-1.1,0-1.9-0.9-1.9-1.9c0-0.4,0.1-0.7,0.3-1l-0.8-0.9h-3.6v6.5c0,0.3-0.2,0.5-0.5,0.5   c-0.3,0-0.5-0.2-0.5-0.5v-4.5h-2c-0.1,0-0.2,0-0.3-0.1l-2.2-1.8c0,0-0.1,0-0.1-0.1l-4-3.3c-0.3,0.2-0.7,0.4-1.1,0.4   c-1,0-1.9-0.9-1.9-1.9c0-1.1,0.9-1.9,1.9-1.9c1,0,1.9,0.9,1.9,1.9c0,0.3-0.1,0.5-0.2,0.8l3.1,2.6L19.6,28C18.7,27.8,18,27,18,26.1   c0-1.1,0.9-1.9,1.9-1.9s1.9,0.9,1.9,1.9c0,0.8-0.5,1.5-1.2,1.8l0.4,3.9l2,1.6h1.9v-8h-2c-0.2,0-0.4-0.1-0.4-0.3L20.2,20l-2.5,0.4   c-0.1,1-0.9,1.8-1.9,1.8c-1,0-1.9-0.9-1.9-1.9c0-1.1,0.9-1.9,1.9-1.9c0.8,0,1.5,0.5,1.7,1.1l2.3-0.4l-0.7-1.6c-0.1,0-0.2,0-0.3,0   c-1,0-1.9-0.9-1.9-1.9c0-1,0.9-1.9,1.9-1.9c1,0,1.9,0.9,1.9,1.9c0,0.6-0.3,1.2-0.7,1.5l0.9,2.1l2.2,5.2h1.7v-8.8   c-0.8-0.2-1.4-1-1.4-1.9c0-1.1,0.9-1.9,1.9-1.9s1.9,0.9,1.9,1.9c0,0.9-0.6,1.6-1.4,1.8v11.6l3.6-3.6l0.2-2.3   c-0.8-0.3-1.3-1-1.3-1.8c0-1.1,0.9-1.9,1.9-1.9c1.1,0,1.9,0.9,1.9,1.9c0,0.9-0.7,1.7-1.6,1.9l-0.2,2h2.8c0.2-0.8,0.9-1.4,1.8-1.4   c1,0,1.9,0.9,1.9,1.9C36.9,24.9,36,25.7,35,25.7z" />
      <path d="M15,26.6c-0.5,0-0.9,0.4-0.9,1s0.4,1,0.9,1c0.1,0,0.2,0,0.3-0.1c0.3-0.1,0.6-0.4,0.6-0.7v0c0,0,0-0.1,0-0.1   C16,27,15.5,26.6,15,26.6z" />
    </svg>
  );
}

export function WrenchScrewdriverIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-6 w-6 ${className ?? ''}`}>
      <path
        fillRule="evenodd"
        d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
        clipRule="evenodd"
      />
      <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
      <path
        fillRule="evenodd"
        d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function BlockchainIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-6 w-6 ${className ?? ''}`}>
      <path
        fillRule="evenodd"
        d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function TrophyIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''} w-6 h-6 `}>
      <path
        fillRule="evenodd"
        d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function AcademicCap({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''} w-6 h-6 `}>
      <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
      <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
      <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
    </svg>
  );
}

export function BuildingOffice2Icon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''} w-6 h-6 `}>
      <path
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function IdentificationIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''} w-6 h-6 `}>
      <path
        fillRule="evenodd"
        d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CodeBracketIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''} w-6 h-6 `}>
      <path
        fillRule="evenodd"
        d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function UserGroupIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''} w-6 h-6 `}>
      <path
        fillRule="evenodd"
        d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
        clipRule="evenodd"
      />
      <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
    </svg>
  );
}

export function PhotoIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''} h-6 w-6`}>
      <path
        fillRule="evenodd"
        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CheckCircleIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''} h-6 w-6`}>
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function InfinityIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''} h-6 w-6`}>
      <path d="M20.288 9.463a4.856 4.856 0 0 0-4.336-2.3 4.586 4.586 0 0 0-3.343 1.767c.071.116.148.226.212.347l.879 1.652.134-.254a2.71 2.71 0 0 1 2.206-1.519 2.845 2.845 0 1 1 0 5.686 2.708 2.708 0 0 1-2.205-1.518L13.131 12l-1.193-2.26a4.709 4.709 0 0 0-3.89-2.581 4.845 4.845 0 1 0 0 9.682 4.586 4.586 0 0 0 3.343-1.767c-.071-.116-.148-.226-.212-.347l-.879-1.656-.134.254a2.71 2.71 0 0 1-2.206 1.519 2.855 2.855 0 0 1-2.559-1.369 2.825 2.825 0 0 1 0-2.946 2.862 2.862 0 0 1 2.442-1.374h.121a2.708 2.708 0 0 1 2.205 1.518l.7 1.327 1.193 2.26a4.709 4.709 0 0 0 3.89 2.581h.209a4.846 4.846 0 0 0 4.127-7.378z" />
    </svg>
  );
}

export function EyeIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`${className ?? ''} h-5 w-5`}>
      <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path
        fillRule="evenodd"
        d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ExclamationCircleIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className ?? ''} h-6 w-6`}>
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function DownloadIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className ?? ''} h-6 w-6`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}
