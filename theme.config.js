import Gitlab from '@geist-ui/react-icons/github'
export default {
  github: 'https://github.com/m4yk3ldev/doc_kiero',
  projectLinkIcon: <Gitlab />,
  docsRepositoryBase: 'https://github.com/m4yk3ldev/doc_kiero',
  titleSuffix: ' - Kiero CO',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Kiero</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentación
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="es_CO" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  defaultMenuCollapsed: true,
  footer: true,
  footerEditLink: 'Editar en GitLab',
  footerText: <>MIT {new Date().getFullYear()} © Kiero.</>,
  unstable_faviconGlyph: '📚',
  unstable_stork: true,
}
