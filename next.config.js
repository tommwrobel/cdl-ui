/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate-plugin");
const withSvgr = require("next-plugin-svgr");

const nextConfig = {};

module.exports = withSvgr(nextTranslate(nextConfig));
