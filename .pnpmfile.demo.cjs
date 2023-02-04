module.exports = {
  hooks: {
    readPackage(pkg) {
      // @see https://github.com/pnpm/pnpm/discussions/4051
      if (pkg.name === '@nestjs/core') {
        delete pkg.peerDependencies;
        delete pkg.peerDependenciesMeta;
      }
      return pkg;
    },
  },
};
